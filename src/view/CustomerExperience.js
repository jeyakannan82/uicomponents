import React from "react";
import PropTypes from "prop-types";
import { Container, Row, CardBody } from "shards-react";

import { Tabs, Tab, Nav, Col } from "react-bootstrap";

import PageTitle from "../components/PageTitle";
import SmallStatus from "../components/SmallStatus";
import UsersOverview from "../components/UsersOverview";
import UsersByDevice from "../components/UsersByDevice";
import TopReferrals from "../components/TopReferrals";
import SuccessChart from "../components/SuccessChart";
import UpTimeChart from "../components/UpTime";
import SearchTypeChart from "../components/SearchType"
//import GoodExperience from "../components/GoodExperience"

import ExpandableTableComponent from "../components/ExpandableTableComponent";

const CustomerExperience = ({ smallStats , goodExp, tabToggle, averageExp, badExp }) => (
  <Container  className="">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle subtitle="Application Overview" className="text-sm-left mb-3" />
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
                                   <SuccessChart />
           </Col>
       {/* UpTime DownTime Chart */}
       <Col lg="4" md="4" sm="4" className="mb-4">
        <UpTimeChart />
       </Col>

       {/* Action Type Chart */}
       <Col lg="4" md="4" sm="4" className="mb-4">
       <SearchTypeChart />
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
                        <tbody>
                    {goodExp.map((country, idx) => (
                      <tr key={idx}>
                        <td>{country.user}</td>
                        <td>{country.title}</td>
                        <td>{country.response}</td>
                        <td>{country.failedCount}</td>
                        <td>{country.successCount}</td>
                        <td>{country.userFailureCount}</td>
                        <td>{country.experience}</td>
                        <td>{country.meet}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
  {/* Countries Table List */}
                <table className="table table-light mb-0">

                        <thead className="experience">
                          <tr>
                            <th scope="col" className="border-0">
                              Customer Name
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
                        <tbody>
                      {goodExp.map((country, idx) => (
                                           <tr key={idx}>
                                             <td>{country.user}</td>
                                             <td>{country.title}</td>
                                             <td>{country.response}</td>
                                             <td>{country.failedCount}</td>
                                             <td>{country.successCount}</td>
                                             <td>{country.userFailureCount}</td>
                                             <td>{country.experience}</td>
                                             <td>{country.meet}</td>
                                           </tr>
                                         ))}
                       </tbody>
                </table>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
  {/* Countries Table List */}
<ExpandableTableComponent />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

    </CardBody>
  </Container>
);

CustomerExperience.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array

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
