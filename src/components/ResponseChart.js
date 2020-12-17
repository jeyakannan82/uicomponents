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

 class ResponseChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                        {
                          "x": new Date(1,0),
                          "y": 4
                        },
                        {
                          "x": new Date(2,0),
                          "y": 4
                        },
                        {
                          "x": new Date(3,0),
                          "y": 1
                        },
                        {
                          "x": new Date(4,0),
                          "y": 1
                        },
                        {
                          "x": new Date(5,0),
                          "y": 1
                        },
                        {
                          "x": new Date(6,0),
                          "y": 1
                        },
                        {
                          "x": new Date(7,0),
                          "y": 0
                        },
                        {
                          "x": new Date(8,0),
                          "y": 1
                        },
                        {
                          "x": new Date(9,0),
                          "y": 1
                        },
                        {
                          "x": new Date(10,0),
                          "y": 2
                        }
                      ]
           };

   }

  componentWillMount() {
    const responseChart = fetch('http://localhost:5000/aztecs/dashboards?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        var dataPoints = [];
                        for (var i = 0; i <= response_data.response.length; i++) {
                        console.log(response_data.response[i])
                        var dateTime = new DateObject(response_data.response[i].x);
                        dateTime.format("YYYY-MM-DDThh:mm:ss.SSSZ");


                         dataPoints.push({
                             x: dateTime,
                             y: response_data.response[i].y
                           });
                        }
                        this.setState({ data : dataPoints })
                        return response_data;
                      });

  }

	render()
	{
		const data_points = this.state.data;
			const options = {
    			animationEnabled: true,
    			exportEnabled: true,
    			theme: "light2",
    			 axisX :{
                        labelAngle: -90
                      },
    			title:{
    				text: "Response",
    				fontFamily:'Impact',
    				fontSize: 15
    			},
    			data: [{
    				type: "splineArea",
                    increase: false,
                    decrease: false,
    				dataPoints: data_points
    			}]
    		}
   		return (
   			<div>
           <CanvasJSChart options = {options}
            					/* onRef={ref => this.chart = ref}*/
            				/>
            			</div>
   		);
    }
  }
  export default ResponseChart;