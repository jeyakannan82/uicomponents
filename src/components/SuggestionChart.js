import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import ApexCharts from 'apexcharts'
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";
export default class SuggestionChart extends React.Component {

  constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                          {
                            data: {
                                    "400": 0.2,
                                    "401": 0.7,
                                    "403": 0.3,
                                    "404": 0.6,
                                    "405": 0.4,
                                    "406": 0.2,
                                    "408": 0.6,
                                    "415": 0.5,
                                    "429": 0.5,
                                    "500": 0.8,
                                    "502": 0.2,
                                    "503": 0.2,
                                    "504": 0.1
                            },
                            meta: { color: "red" }
                          },
                          {
                            data: {
                                    "400": 0.7,
                                    "401": 0.5,
                                    "403": 0.5,
                                    "404": 0.6,
                                    "405": 0.6,
                                    "406": 0.2,
                                    "408": 0.2,
                                    "415": 0.3,
                                    "429": 0.4,
                                    "500": 0.5,
                                    "502": 0.6,
                                    "503": 0.7,
                                    "504": 0.9
                             },
                            meta: { color: 'red' }
                          },
                          {
                                data: {
                                    "400": 0.2,
                                    "401": 0.3,
                                    "403": 0.3,
                                    "404": 0.4,
                                    "405": 0.5,
                                    "406": 0.7,
                                    "408": 0.4,
                                    "415": 0.6,
                                    "429": 0.8,
                                    "500": 0.3,
                                    "502": 0.3,
                                    "503": 0.7,
                                    "504": 0.9
                                },
                                meta: { color: '#58FCEC' }
                            }
                        ],
                 captions : {
                       // columns
                                    "400": "Bad Request",
                                    "401": "Unauthorized",
                                    "403": "Forbidden",
                                    "404": "Not Found",
                                    "405": "Method Not Allowed",
                                    "406": "Not Acceptable",
                                    "408": "Request Timeout",
                                    "415": "Unsupported Media Type",
                                    "429": "Too Many Requests",
                                    "500": "Internal Server Error",
                                    "502": "Bad Gateway",
                                    "503": "Service Unavailable",
                                    "504": "Gateway Timed out"
                     }
           };

   }

  componentWillMount() {
    const npsResponse = fetch('http://localhost:5000/aztecs/recommendation')
                      .then(response => response.json())
                      .then(response_data => {
                        console.log(response_data.radarData);
                        this.setState({ data : response_data.radarData, caption : response_data.caption })
                        return response_data;
                      });

  }

  render() {
   	    const data = this.state.data
   	    const caption = this.state.captions
   	    console.log(caption)
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

    const noSmoothing = points => {
        let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
        for (let i = 1; i < points.length; i++) {
          d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
        }
        return d + 'z';
      };

      const defaultOptions = {
        size: 200,
        axes: true, // show axes?
        scales: 10, // show scale circles?
        captions: true, // show captions?
        captionMargin: 10,
        dots: true, // show dots?
        zoomDistance: 1.2, // where on the axes are the captions?
        setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
        smoothing: noSmoothing, // shape smoothing function
        axisProps: () => ({ className: 'axis' }),
        scaleProps: () => ({ className: 'scale', fill: 'none' }),
        shapeProps: () => ({ className: 'shape' }),
        captionProps: () => ({
          className: 'caption',
          textAnchor: 'middle',
          fontSize: 10,
          fontFamily: 'sans-serif'
        }),
        dotProps: () => ({
          className: 'dot',
          mouseEnter: (dot) => {
              document.getElementById("tooltip").innerText = "index: " + dot.idx + ", key: " + dot.key + ", value: " + dot.value;
              document.getElementById("tooltip").style.visibility = "visible";
            },
          mouseLeave: (dot) => {
              document.getElementById("tooltip").innerText = "";
              document.getElementById("tooltip").style.visibility = "hidden";
            }
        })
      };

    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Customer Experience by action</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
        <RadarChart
            captions={caption}
            data={data}
            size={400}
            options={defaultOptions}
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
}