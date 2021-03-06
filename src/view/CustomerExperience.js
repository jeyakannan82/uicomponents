import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col,
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText, Button, CardBody  } from "shards-react";
  import classNames from "classnames";

import { Tabs, Tab, Nav } from "react-bootstrap";

import PageTitle from "../components/PageTitle";
import SmallStatus from "../components/SmallStatus";
import TopReferrals from "../components/TopReferrals";
import SuccessChart from "../components/SuccessChart";
import UpTimeChart from "../components/UpTime";
import SearchTypeChart from "../components/SearchType"
import RangeDatePicker from "../components/RangeDatePicker";
import DateTimePicker from 'react-datetime-picker';
import "../assets/range-date-picker.css";
import getDashboardData from '../hooks/getDashboardData';
import GoodExperience from "../components/GoodExperience"
import BadExperience from "../components/BadExperience"
import AverageExperience from "../components/AverageExperience"
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import moment from 'moment';
import ExpandableTableComponent from "../components/ExpandableTableComponent";


const CustomerExperience = ({ smallStats , goodExp, tabToggle, averageExp, badExp, props }) => {
const [activityByAction, experience, reliability, availability,response] = getDashboardData();
const [startExpDate, setStartExpDate] = React.useState(new Date());
const [endExpDate, setEndExpDate] = React.useState(new Date());
const [expValue, onChange] = React.useState([new Date(), new Date()]);
const { className } =  React.useState(0);
const classes = classNames(className, "d-flex", "my-auto", "date-range");

 React.useEffect(
    () => {
      setStartExpDate(moment(expValue[0]).format("YYYY-MM-DD HH:mm:ss"))
      setEndExpDate(moment(expValue[1]).format("YYYY-MM-DD HH:mm:ss"))
    },
    [startExpDate, endExpDate, expValue]
  );
 return ( <Container  className="">
    {/* Page Header */}
      <Row noGutters className="page-header py-4">

        <Col lg="6" md="12" sm="12" className="mb-4">
           <PageTitle subtitle="Customer Experience" className="text-sm-left mb-4" />
        </Col>

        {/* Users by Device */}
        <Col  lg="6" md="12" sm="12" className="text-sm-right mb-4">
          <DateTimeRangePicker onChange={onChange} value ={expValue} className="text-center"/>
        </Col>
      </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStatus
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
     {/* Success Failure Chart*/}
          <Col lg="4" md="4" sm="4" className="mb-4">
                                   <SuccessChart startExpDate={startExpDate} endExpDate = {endExpDate} expDates ={expValue} key={expValue} />
           </Col>
       {/* UpTime DownTime Chart */}
       <Col lg="4" md="4" sm="4" className="mb-4">
        <UpTimeChart startExpDate={startExpDate} endExpDate = {endExpDate} expDates ={expValue} key={expValue} />
       </Col>

       {/* Action Type Chart */}
       <Col lg="4" md="4" sm="4" className="mb-4">
       <SearchTypeChart startExpDate={startExpDate} endExpDate = {endExpDate} expDates ={expValue} key={expValue} />
       </Col>
    </Row>
    <CardBody className="p-0">
<Tab.Container id="left-tabs-example" defaultActiveKey="first">


  <Row>
    <Col sm={2} >
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Good Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Average Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Bad Experience</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
           {/* Countries Table List */}
                <table className="table table-light mb-0">

                        <thead className="experience">
                          <tr>
                            <th scope="col" className="border-0">
                              User Perm ID
                            </th>
                            <th scope="col" className="border-0">
                              Origin
                            </th>
                            <th scope="col" className="border-0">
                              Response
                            </th>
                            <th scope="col" className="border-0">
                              Failed Count
                            </th>
                            <th scope="col" className="border-0">
                              Success Count
                            </th>
                            <th scope="col" className="border-0">
                              User Failures
                            </th>
                            <th scope="col" className="border-0">
                              User Experience
                            </th>
                            <th scope="col" className="border-0">
                             Meet Expectation
                            </th>
                          </tr>
                        </thead>
                       <GoodExperience startExpDate={startExpDate} endExpDate = {endExpDate} expDates ={expValue} key={expValue} />
                </table>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
  {/* Countries Table List */}
                <table className="table table-light mb-0">

                        <thead className="experience">
                          <tr>
                            <th scope="col" className="border-0">
                              User Perm ID
                            </th>
                            <th scope="col" className="border-0">
                              Origin
                            </th>
                            <th scope="col" className="border-0">
                              Response
                            </th>
                            <th scope="col" className="border-0">
                              Failed Count
                            </th>
                            <th scope="col" className="border-0">
                              Success Count
                            </th>
                            <th scope="col" className="border-0">
                              User Failures
                            </th>
                            <th scope="col" className="border-0">
                              User Experience
                            </th>
                            <th scope="col" className="border-0">
                             Meet Expectation
                            </th>
                          </tr>
                        </thead>
                      <AverageExperience startExpDate={startExpDate} endExpDate = {endExpDate} expDates ={expValue} key={expValue} />
                </table>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
  {/* Countries Table List */}
 <table className="table table-light mb-0">

                        <thead className="experience">
                          <tr>
                            <th scope="col" className="border-0">
                              User Perm ID
                            </th>
                            <th scope="col" className="border-0">
                              Origin
                            </th>
                            <th scope="col" className="border-0">
                              Response
                            </th>
                            <th scope="col" className="border-0">
                              Failed Count
                            </th>
                            <th scope="col" className="border-0">
                              Success Count
                            </th>
                            <th scope="col" className="border-0">
                              User Failures
                            </th>
                            <th scope="col" className="border-0">
                              User Experience
                            </th>
                            <th scope="col" className="border-0">
                             Meet Expectation
                            </th>
                          </tr>
                        </thead>
                      <BadExperience startExpDate={startExpDate} endExpDate = {endExpDate} expDates ={expValue} key={expValue} />
                </table>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

    </CardBody>
  </Container>);
}

CustomerExperience.propTypes = {
  /**
   * The small stats dataset.
   */
    smallStats: PropTypes.array,
    expDates : PropTypes.array,
    startExpDate: PropTypes.object,
    endExpDate: PropTypes.object,

};

CustomerExperience.defaultProps = {
  smallStats:[
  ],
    goodExp : [
      {
        user: 'Sam Williams',
        title: "United States",
        response: "2.3",
        failedCout: 2,
        successCount: 200,
        userFailureCount: 10,
        experience: "99.1%",
        meet: "Yes"
      },
      {
        user: 'Kiran Bob',
        title: "United States",
        response: "2.3",
        failedCout: 5,
        successCount: 50,
        userFailureCount: 5,
        experience: "60.1%",
         meet: "No"
      },
      {
        user: 'Kavya Suresh',
        title: "United States",
        response: "2.3",
        failedCout: 5,
        successCount: 260,
        userFailureCount: 3,
        experience: "99.98%",
        meet: "Yes"
      },
      {
        user: 'Randall Williams',
        title: "United States",
        response: "2.3",
        failedCout: 2,
        successCount: 200,
        userFailureCount: 10,
        experience: "99.1%",
        meet: "Yes"
      },
        {
          user: 'Kanstintant ',
          title: "United States",
          response: "1.2",
          failedCout: 2,
          successCount: 100,
          userFailureCount: 1,
          experience: "80.4%",
          meet: "No"
        },
           {
             user: 'Kavya Suresh',
             title: "United States",
             response: "2.3",
             failedCout: 5,
             successCount: 260,
             userFailureCount: 3,
             experience: "99.98%",
             meet: "Yes"
           },
           {
             user: 'Randall Williams',
             title: "United States",
             response: "2.3",
             failedCout: 2,
             successCount: 200,
             userFailureCount: 10,
             experience: "99.1%",
             meet: "Yes"
           },
             {
               user: 'Kanstintant ',
               title: "United States",
               response: "1.2",
               failedCout: 2,
               successCount: 100,
               userFailureCount: 1,
               experience: "80.4%",
               meet: "No"
             },
           {
             user: 'Kavya Suresh',
             title: "United States",
             response: "2.3",
             failedCout: 5,
             successCount: 260,
             userFailureCount: 3,
             experience: "99.98%",
             meet: "Yes"
           },
           {
             user: 'Randall Williams',
             title: "United States",
             response: "2.3",
             failedCout: 2,
             successCount: 200,
             userFailureCount: 10,
             experience: "99.1%",
             meet: "Yes"
           },
             {
               user: 'Kanstintant ',
               title: "United States",
               response: "1.2",
               failedCout: 2,
               successCount: 100,
               userFailureCount: 1,
               experience: "80.4%",
               meet: "No"
             }
    ],
    mapsData : [
      ["Country", "Users"],
      ["United States", 12219],
      ["United Kingdom", 11192],
      ["Australia", 9291],
      ["Japan", 2291]
    ],
         averageExp: [
           {
             user: 'Sam Williams',
             title: "United States",
             response: "2.3",
             failedCout: 2,
             successCount: 200,
             userFailureCount: 10,
             experience: "99.1%",
             meet: "Yes"
           },
           {
             user: 'Kiran Bob',
             title: "United States",
             response: "2.3",
             failedCout: 5,
             successCount: 50,
             userFailureCount: 5,
             experience: "60.1%",
              meet: "No"
           },
           {
             user: 'Kavya Suresh',
             title: "United States",
             response: "2.3",
             failedCout: 5,
             successCount: 260,
             userFailureCount: 3,
             experience: "99.98%",
             meet: "Yes"
           },
           {
             user: 'Randall Williams',
             title: "United States",
             response: "2.3",
             failedCout: 2,
             successCount: 200,
             userFailureCount: 10,
             experience: "99.1%",
             meet: "Yes"
           },
             {
               user: 'Kanstintant ',
               title: "United States",
               response: "1.2",
               failedCout: 2,
               successCount: 100,
               userFailureCount: 1,
               experience: "80.4%",
               meet: "No"
             },
                {
                  user: 'Kavya Suresh',
                  title: "United States",
                  response: "2.3",
                  failedCout: 5,
                  successCount: 260,
                  userFailureCount: 3,
                  experience: "99.98%",
                  meet: "Yes"
                },
                {
                  user: 'Randall Williams',
                  title: "United States",
                  response: "2.3",
                  failedCout: 2,
                  successCount: 200,
                  userFailureCount: 10,
                  experience: "99.1%",
                  meet: "Yes"
                },
                  {
                    user: 'Kanstintant ',
                    title: "United States",
                    response: "1.2",
                    failedCout: 2,
                    successCount: 100,
                    userFailureCount: 1,
                    experience: "80.4%",
                    meet: "No"
                  },
                {
                  user: 'Kavya Suresh',
                  title: "United States",
                  response: "2.3",
                  failedCout: 5,
                  successCount: 260,
                  userFailureCount: 3,
                  experience: "99.98%",
                  meet: "Yes"
                },
                {
                  user: 'Randall Williams',
                  title: "United States",
                  response: "2.3",
                  failedCout: 2,
                  successCount: 200,
                  userFailureCount: 10,
                  experience: "99.1%",
                  meet: "Yes"
                },
                  {
                    user: 'Kanstintant ',
                    title: "United States",
                    response: "1.2",
                    failedCout: 2,
                    successCount: 100,
                    userFailureCount: 1,
                    experience: "80.4%",
                    meet: "No"
                  }
         ],
              badExp: [
                {
                  user: 'Sam Williams',
                  title: "United States",
                  response: "2.3",
                  failedCout: 2,
                  successCount: 200,
                  userFailureCount: 10,
                  experience: "99.1%",
                  meet: "Yes"
                },
                {
                  user: 'Kiran Bob',
                  title: "United States",
                  response: "2.3",
                  failedCout: 5,
                  successCount: 50,
                  userFailureCount: 5,
                  experience: "60.1%",
                   meet: "No"
                },
                {
                  user: 'Kavya Suresh',
                  title: "United States",
                  response: "2.3",
                  failedCout: 5,
                  successCount: 260,
                  userFailureCount: 3,
                  experience: "99.98%",
                  meet: "Yes"
                },
                {
                  user: 'Randall Williams',
                  title: "United States",
                  response: "2.3",
                  failedCout: 2,
                  successCount: 200,
                  userFailureCount: 10,
                  experience: "99.1%",
                  meet: "Yes"
                },
                  {
                    user: 'Kanstintant ',
                    title: "United States",
                    response: "1.2",
                    failedCout: 2,
                    successCount: 100,
                    userFailureCount: 1,
                    experience: "80.4%",
                    meet: "No"
                  },
                     {
                       user: 'Kavya Suresh',
                       title: "United States",
                       response: "2.3",
                       failedCout: 5,
                       successCount: 260,
                       userFailureCount: 3,
                       experience: "99.98%",
                       meet: "Yes"
                     },
                     {
                       user: 'Randall Williams',
                       title: "United States",
                       response: "2.3",
                       failedCout: 2,
                       successCount: 200,
                       userFailureCount: 10,
                       experience: "99.1%",
                       meet: "Yes"
                     },
                       {
                         user: 'Kanstintant ',
                         title: "United States",
                         response: "1.2",
                         failedCout: 2,
                         successCount: 100,
                         userFailureCount: 1,
                         experience: "80.4%",
                         meet: "No"
                       },
                     {
                       user: 'Kavya Suresh',
                       title: "United States",
                       response: "2.3",
                       failedCout: 5,
                       successCount: 260,
                       userFailureCount: 3,
                       experience: "99.98%",
                       meet: "Yes"
                     },
                     {
                       user: 'Randall Williams',
                       title: "United States",
                       response: "2.3",
                       failedCout: 2,
                       successCount: 200,
                       userFailureCount: 10,
                       experience: "99.1%",
                       meet: "Yes"
                     },
                       {
                         user: 'Kanstintant ',
                         title: "United States",
                         response: "1.2",
                         failedCout: 2,
                         successCount: 100,
                         userFailureCount: 1,
                         experience: "80.4%",
                         meet: "No"
                       }
              ],
};


export default CustomerExperience;
