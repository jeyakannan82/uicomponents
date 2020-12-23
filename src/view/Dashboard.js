import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col,
  InputGroup,
  DatePicker,
  FormInput,
  InputGroupAddon,
  InputGroupText, Button } from "shards-react";
  import classNames from "classnames";


import PageTitle from "../components/PageTitle";
import SmallStats from "../components/SmallStats";
import MediamStats from "../components/MediamStats";
import CustomerExperienceTrend from "../components/CustomerExperienceTrend";
import ResponseByService from "../components/ResponseByService";
import CustomerSatisfactionScore from "../components/CustomerSatisfactionScore";
import NPSScore from "../components/NPSScore";
import getDashboardData from '../hooks/getDashboardData';
import RangeDatePicker from "../components/RangeDatePicker";
import DateTimePicker from 'react-datetime-picker';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import "../assets/range-date-picker.css";
import ResponseChart from "../components/ResponseChart";
import ReliabilityChart from "../components/ReliabilityChart";
import AvailabilityChart from "../components/AvailabilityChart";
import moment from 'moment';


const Dashboard = ({ smallStats , custStats , polarChartData, props}) => {
const [activityByAction, experience, reliability, availability,response] = getDashboardData();
const [startDate, setStartDate] = React.useState(new Date());
const [endDate, setEndDate] = React.useState(new Date());
const [value, setValue] = React.useState([new Date(), new Date()]);

const { className } =  React.useState(0);
const classes = classNames(className, "d-flex", "my-auto", "date-range");
const onChange = (e) => {
  setValue(e);
  }

 React.useEffect(
    () => {
      setStartDate(moment(value[0]).format("YYYY-MM-DD HH:mm:ss"));
      setEndDate(moment(value[1]).format("YYYY-MM-DD HH:mm:ss"));
    },
    [startDate, endDate, value]
  );
return(
  <Container  className="">
    {/* Page Header */}
      <Row noGutters className="page-header py-4">

        <Col lg="6" md="12" sm="12" className="mb-4">
           <PageTitle subtitle="Application Overview" className="text-sm-left mb-4" />
        </Col>

        {/* Users by Device */}
        <Col  lg="6" md="12" sm="12" className="text-sm-right mb-4">
          <DateTimeRangePicker onChange={onChange} value ={value} className="text-center"/>
        </Col>
      </Row>
    <Row>
      {/* Reliability Chart*/}
           <Col lg="4" md="4" sm="4" className="mb-4">
          <ReliabilityChart startDate={startDate} endDate = {endDate} dates ={value} key={value} />
            </Col>
        {/* Availability Chart */}
        <Col lg="4" md="4" sm="4" className="mb-4">
         <AvailabilityChart startDate={startDate} endDate = {endDate} dates ={value} key={value} />
        </Col>

        {/* Response Chart */}
        <Col lg="4" md="4" sm="4" className="mb-4">
        <ResponseChart startDate={startDate} endDate = {endDate} dates ={value} key={value} />
        </Col>
     </Row>

    <Row>

      <Col lg="8" md="12" sm="12" className="mb-4">
         <CustomerSatisfactionScore startDate={startDate} endDate = {endDate} dates ={value} key={value} />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <ResponseByService startDate={startDate} endDate = {endDate} dates ={value} key={value} />
      </Col>
    </Row>

        <Row>

      {/* Users by Device */}
      <Col lg="8" md="12" sm="12" className="mb-4">
       <CustomerExperienceTrend startDate={startDate} endDate = {endDate} dates ={value} key={value} />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <NPSScore startDate={startDate} endDate = {endDate} dates={value} key={value} />
      </Col>
     </Row>
  </Container>);
}

Dashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
  dates : PropTypes.array,
  startDate: PropTypes.object,
  endDate: PropTypes.object,

};

Dashboard.defaultProps = {
  smallStats: [
    /*{
      label: "Reliability",
      value: "98%",
      percentage: "4.7%",
      type: 'line',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor:  "#6970d5",
          borderColor: "#fff",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Availability",
      type: 'line',
      value: "100%",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: '#56d798',
          borderColor: "#fff",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Response",
      value: "2.34 S",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      type: 'line',
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "#f38b4a",
          borderColor: "rgb(255,180,30)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    }*/
  ],
    custStats: [
      {
        label: "Net Promoter Score",
        type: 'polarArea',
        value: "100%",
        percentage: "12.4",
        increase: true,
        chartLabels: ["Promoters", "Passives", "Detractors"],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: 'orange',
            borderColor: "rgb(23,30,113)",
            data: [1, 2, 3]
          }
        ]
      }
    ]
};

export default Dashboard;

