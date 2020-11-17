import React from "react";
import PropTypes from "prop-types";
import { Container, Row, CardBody } from "shards-react";

import { Tabs, Tab, Nav, Col } from "react-bootstrap";

import PageTitle from "../components/PageTitle";
import SmallStats from "../components/SmallStats";
import UsersOverview from "../components/UsersOverview";
import UsersByDevice from "../components/UsersByDevice";
import TopReferrals from "../components/TopReferrals";

const CustomerExperience = ({ smallStats , countries }) => (
  <Container  className="">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle subtitle="Application Overview" className="text-sm-left mb-3" />
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
    <CardBody className="p-0">
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Customer Experience &gt; 90% </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Customer Experience &gt; 80% and &lt; 90</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Customer Experience &lt; 80% </Nav.Link>
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
                    {countries.map((country, idx) => (
                      <tr key={idx}>
                        <td> {country.user}</td>
                        <td>{country.title}</td>
                        <td>{country.response}</td>
                        <td>{country.failedCout}</td>
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
         <div>This is seconds</div>
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


export default CustomerExperience;
