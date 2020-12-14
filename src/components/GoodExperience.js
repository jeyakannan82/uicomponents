import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {  Table } from "semantic-ui-react";

 class GoodExperience extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
           this.state = {
             data : null
           };

   }
       componentWillMount() {
         const goodExpResponse = fetch('http://localhost:5000/aztecs/experience?countryTotal=IN')
                           .then(response => response.json())
                           .then(response_data => {
                             console.log(response_data);
                             this.setState({ data : response_data.goodExperience })
                             return response_data;
                           });
  }

render() {
 data = this.state.data;
    return (
      <Table singleLine className="table table-light mb-0">
        <Table.Header className="experience">
          <Table.Row>
            <Table.HeaderCell scope="col" className="border-0">Customer Perm ID</Table.HeaderCell>
            <Table.HeaderCell scope="col" className="border-0">Failed Count</Table.HeaderCell>
            <Table.HeaderCell scope="col" className="border-0">Success Count</Table.HeaderCell>
            <Table.HeaderCell scope="col" className="border-0">User Failures</Table.HeaderCell>
            <Table.HeaderCell scope="col" className="border-0">Meet Expectations</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(el => {
            return (
              <Table.Row>
                <Table.Cell>{el.userId}</Table.Cell>
                <Table.Cell>
                  {el.server_failed}
                </Table.Cell>
                <Table.Cell>{el.good}</Table.Cell>
                <Table.Cell>{el.user_failed}</Table.Cell>
                <Table.Cell>{el.meet}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    );
  }
}

 export default GoodExperience;