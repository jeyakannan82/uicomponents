import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";
import CanvasJSReact from '../assets/canvasjs.react';
import DateObject from "react-date-object";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

 class ResonseCodeChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                    					{ y:  2200000000, label: "Facebook" },
                    					{ y:  1800000000, label: "YouTube" },
                    					{ y:  800000000, label: "Instagram" },
                    					{ y:  563000000, label: "Qzone" },
                    					{ y:  376000000, label: "Weibo" },
                    					{ y:  336000000, label: "Twitter" },
                    					{ y:  330000000, label: "Reddit" }
                    				]
           };

   }

  componentWillMount() {
    const responseChart = fetch('http://localhost:5000/aztecs/recommendation')
                      .then(response => response.json())
                      .then(response_data => {
                        console.log(response_data.errorCode)
                         this.setState({ data : response_data.errorCode })
                        return response_data;
                      });

  }
render() {
    const data = this.state.data;
		const options = {
			animationEnabled: true,
			theme: "light2",
			axisX: {
				title: "Error type",
				reversed: true,
			},
			axisY: {
				title: "Failures type by service",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: data
			}]
		}
		    const tooltipstyle = {
                position: 'relative',
                display: 'inline-block',
                borderBottom: '1px dotted black'
            }

            const tooltiptextstyle = {
                visibility: 'hidden',
                width: '220px',
                backgroundColor: 'black',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '6px',
                padding: '5px 0',

                /* Position the tooltip */
                position: 'absolute',
                zIndex: '1',
            }
		return (
		      <Card small className="h-100">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Customer Experience by action</h6>
                </CardHeader>
                <CardBody className="d-flex py-0">
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>


                  <div id="divtool" style={tooltipstyle}><label id="tooltip" style={tooltiptextstyle}></label></div>
                </CardBody>
                <CardFooter className="border-top">
                  <Row>
                    <Col>
                      <FormSelect
                        size="sm"
                        value="last-week"
                        style={{ maxWidth: "130px" }}
                        onChange={() => {}}
                      >
                        <option value="last-week">Last Week</option>
                        <option value="today">Today</option>
                        <option value="last-month">Last Month</option>
                        <option value="last-year">Last Year</option>
                      </FormSelect>
                    </Col>
                    <Col className="text-right view-report">
                      {/* eslint-disable-next-line */}
                      <a href="#">View full report &rarr;</a>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>

		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

  }
  export default ResonseCodeChart;