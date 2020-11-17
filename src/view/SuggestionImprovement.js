import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, CardBody } from "shards-react";

import PageTitle from "../components/PageTitle";
import SmallStats from "../components/SmallStats";
import SuggestionChart from "../components/SuggestionChart";
import SuggestionScore from "../components/SuggestionScore";
import ErrorRate from "../components/ErrorRate";
import UsersByDevice from "../components/UsersByDevice";
import TopReferrals from "../components/TopReferrals";
import Tree from 'react-animated-tree'

const treeStyles = {

  color: 'white',
  fill: 'white',
  width: '100%',
  backgroundColor : '#373737'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}

const SuggestionImprovement = ({ smallStats , countries }) => (
  <Container  className="">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle subtitle="Application Overview" className="text-sm-left mb-3" />
    </Row>


        <Row>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <SuggestionChart />
      </Col>
        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4">
          <ErrorRate   />
        </Col>
      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <SuggestionScore />
      </Col>

     </Row>

    <Row>

      <Col  className="solutionTreee" lg="12" md="12" sm="12" className="mb-4">

      <Tree content="main" type="Solutions" canHide open style={treeStyles}>
        <Tree content="hello" type={<span style={typeStyles}>🙀</span>} canHide />
        <Tree content="subtree with children" canHide>
          <Tree content="hello" />
          <Tree content="sub-subtree with children">
            <Tree content="child 1" style={{ color: '#63b1de' }} />
            <Tree content="child 2" style={{ color: '#63b1de' }} />
            <Tree content="child 3" style={{ color: '#63b1de' }} />
          </Tree>
          <Tree content="hello" />
        </Tree>
        <Tree content="hello" canHide />
        <Tree content="hello" canHide />
      <Tree content="Response time degraded"  open style={treeStyles} type={<span style={typeStyles}>🙀</span>} canHide>
          <Tree content="Need to improve the performance for the below api">
            <Tree content="Data Base call took more time" style={{ color: '#63b1de' }} />
            <Tree content="Processing taking more time" style={{ color: '#63b1de' }} />
            <Tree content="Response time degraded in external service call" style={{ color: '#63b1de' }} />
          </Tree>
      </Tree>
      <Tree content="Many Infra structure failures"  open style={treeStyles} type={<span style={typeStyles}>🙀</span>} canHide>
            <Tree content="There are many DB server error. Please contact DBA for the solution" style={{ color: '#63b1de' }} />
            <Tree content="There are many runtime exception in code. Please make sure you are catching properly" style={{ color: '#63b1de' }} />
            <Tree content="There are many time out error . Please make sure your system available all the time" style={{ color: '#63b1de' }} />
            <Tree content="System is running out of memory. Please do memory analysis" style={{ color: '#63b1de' }} />
      </Tree>
      <Tree content="User is doing more activity around this api"  open style={treeStyles} type={<span style={typeStyles}>🙀</span>} canHide>
            <Tree content="Please make sure you are giving relevant data to user " style={{ color: '#63b1de' }} />
            <Tree content="your service algorithm to provide the relevance data to user" style={{ color: '#63b1de' }} />
      </Tree>
      <Tree content="Many User Failures in the application"  open style={treeStyles} type={<span style={typeStyles}>🙀</span>} canHide>
            <Tree content="Please make sure you are giving right information on the user interface" style={{ color: '#63b1de' }} />
            <Tree content="Please revisit your user interface design" style={{ color: '#63b1de' }} />
      </Tree>
      <Tree content="Others"  open style={treeStyles} type={<span style={typeStyles}>🙀</span>} canHide>
            <Tree content="Garbage collection issue" style={{ color: '#63b1de' }} />
            <Tree content="Connection pool issue and etc " style={{ color: '#63b1de' }} />
            <Tree content="CPU utilization" style={{ color: '#63b1de' }} />
      </Tree>
      </Tree>
      </Col>
     </Row>
  </Container>
);

SuggestionImprovement.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

SuggestionImprovement.defaultProps = {
  smallStats: [
    {
      label: "Failures/Success Transactions in %",
      value: "98%",
      percentage: "4.7%",
      type: 'bar',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(20, 184, 216, 40.1)",
          borderColor: "rgb(30, 184, 216)",
          data: [5, 4, 6, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Uptime/Downtime",
      type: 'bar',
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
          backgroundColor: 'orange',
          borderColor: "rgb(23,30,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Response for top users",
      value: "2.34 S",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      type: 'bar',
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "green",
          borderColor: "rgb(255,180,30)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    }
  ],
    countries: [
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
    mapsData: [
      ["Country", "Users"],
      ["United States", 12219],
      ["United Kingdom", 11192],
      ["Australia", 9291],
      ["Japan", 2291]
    ]
};


export default SuggestionImprovement;
