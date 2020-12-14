import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col,
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText, Button } from "shards-react";
  import classNames from "classnames";


import PageTitle from "../components/PageTitle";
import SmallStats from "../components/SmallStats";
import MediamStats from "../components/MediamStats";
import UsersOverview from "../components/UsersOverview";
import CustomerExperienceTrend from "../components/CustomerExperienceTrend";
import UsersByDevice from "../components/UsersByDevice";
import CustomerSatisfactionScore from "../components/CustomerSatisfactionScore";
import NPSScore from "../components/NPSScore";
import getDashboardData from '../hooks/getDashboardData';
import RangeDatePicker from "../components/RangeDatePicker";
import DateTimePicker from 'react-datetime-picker';
import "../assets/range-date-picker.css";
import ResponseChart from "../components/ResponseChart";
import ReliabilityChart from "../components/ReliabilityChart";
import AvailabilityChart from "../components/AvailabilityChart";


const Dashboard = ({ smallStats , custStats , polarChartData}) => {
const [activityByAction, experience, reliability, availability,response] = getDashboardData();
const [value, onChange] = useState(new Date());
const { className } =  React.useState(0);
const classes = classNames(className, "d-flex", "my-auto", "date-range");
const onRefresh = useCallback(async () => {
 window.location.reload(false);

  }, [activityByAction, experience, reliability, availability,response]);
return(
  <Container  className="">
    {/* Page Header */}
      <Row noGutters className="page-header py-4">

        <Col lg="6" md="12" sm="12" className="mb-4">
           <PageTitle subtitle="Application Overview" className="text-sm-left mb-4" />
        </Col>

        {/* Users by Device */}
        <Col  lg="6" md="12" sm="12" className="text-sm-right mb-4">
           <InputGroup className={classes}>
              <DateTimePicker onChange={onChange} value={value} className="text-center"/>
              <DateTimePicker onChange={onChange} value={value} className="text-center"/>
              <InputGroupAddon type="append"> <Button theme="secondary" onClick={onRefresh}>Check</Button></InputGroupAddon>
            </InputGroup>
        </Col>
      </Row>
    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            type={stats.type}
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
     </Row>
    <Row>
      {/* Reliability Chart*/}
           <Col lg="4" md="4" sm="4" className="mb-4">
          <ReliabilityChart />
            </Col>
        {/* Availability Chart */}
        <Col lg="4" md="4" sm="4" className="mb-4">
         <AvailabilityChart />
        </Col>

        {/* Response Chart */}
        <Col lg="4" md="4" sm="4" className="mb-4">
        <ResponseChart />
        </Col>
     </Row>

    <Row>

      <Col lg="8" md="12" sm="12" className="mb-4">
         <CustomerSatisfactionScore />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>
    </Row>

        <Row>

      {/* Users by Device */}
      <Col lg="8" md="12" sm="12" className="mb-4">
       <CustomerExperienceTrend />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <NPSScore/>
      </Col>
     </Row>
  </Container>);
}

Dashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
  polarChartData : { msg: [], osY: [] }
};

Dashboard.defaultProps = {

   polarChartData: {
        msg: ['id1','id2','id3'],
        osY: [40,50.30]
  },
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

