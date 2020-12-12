/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect} from 'react';
import aztecsApi from '../apis/aztecsApi';

const getDashboardData = () => {
  const [satisfactionScore, setSatisfactionScore] = useState('');
  const [npsScore, setNpsScore] = useState('');
  const [errMessage, setErrorMessage] = useState('');

  const getStats = async () => {
    try {
      const resp = await aztecsApi.get('/aztecs/custScores?countryTotal=IN', //proxy uri
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
      setSatisfactionScore(resp.data.satisfaction);
      setNpsScore(resp.data.npsScore);
      console.log(resp.data.npsScore)
      setErrorMessage('');
    } catch (err) {
      setSatisfactionScore({});
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return [npsScore, satisfactionScore, errMessage];
};

export default getDashboardData;