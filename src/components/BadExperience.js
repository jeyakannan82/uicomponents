import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {  Table } from "semantic-ui-react";

 class BadExperience extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
           this.state = {
           data : []
           };

   }
       componentWillMount() {
         const goodExpResponse = fetch('http://localhost:5000/aztecs/badExperience?start_date=' + encodeURIComponent(this.props.startExpDate) +'&end_date=' + encodeURIComponent(this.props.endExpDate))
                           .then(response => response.json())
                           .then(response_data => {
                             console.log(response_data);
                             this.setState({ data : response_data.badExperience })
                             return response_data;
                           });
  }

render() {
   const data = this.state.data;
       return(
       <tbody>
                            {data.map((country, idx) => (
                                           <tr key={idx}>
                                             <td>{country.userID}</td>
                                             <td>United States</td>
                                             <td></td>
                                             <td>{country.server_failed}</td>
                                             <td>{country.success}</td>
                                             <td>{country.user_failed}</td>
                                             <td>{country.percentage}</td>
                                             <td>{country.meetExp}</td>
                                           </tr>
                                         ))}
                                         </tbody>
    )
  }
}

 export default BadExperience;