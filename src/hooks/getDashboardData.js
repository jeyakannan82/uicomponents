/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect} from 'react';
import aztecsApi from '../apis/aztecsApi';

const getDashboardData = () => {
  const [activityByAction, setActivityByAction] = useState('');
  const [experience, setExperience] = useState('');
  const [reliability, setReliability] = useState('');
  const [availability, setAvailability] = useState('');
  const [response, setResponse] = useState('');
  const [errMessage, setErrorMessage] = useState('');

  const getStats = async () => {
    try {
      const resp = await aztecsApi.get('/aztecs/dashboards?countryTotal=IN', //proxy uri
       {
          headers: {
             'Access-Control-Allow-Origin': '*' ,
             'Content-Type': 'application/json'
          }
       }).then(function (response) {
          console.log(response);
          return response;
       });
      console.log(resp.data)
      if (!resp.data) {
        console.log('No Data received');
        throw new Error();
      }
      setActivityByAction(resp.data.activityByAction);
      setExperience(resp.data.experience);
      setReliability(resp.data.reliability);
      setAvailability(resp.data.availability);
      setResponse(resp.data.response);
      setErrorMessage('');
    } catch (err) {
      setActivityByAction({});
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return [activityByAction, experience, reliability, availability,response];
};

export default getDashboardData;