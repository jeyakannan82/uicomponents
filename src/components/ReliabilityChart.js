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
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

 class ReliabilityChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                        {
                          "x": 1,
                          "y": 87
                        },
                        {
                          "x": 2,
                          "y": 97
                        },
                        {
                          "x": 3,
                          "y": 89
                        },
                        {
                          "x": 4,
                          "y": 97
                        },
                        {
                          "x": 5,
                          "y": 99
                        },
                        {
                          "x": 6,
                          "y": 97
                        },
                        {
                          "x": 7,
                          "y": 98
                        },
                        {
                          "x": 8,
                          "y": 99
                        },
                        {
                          "x": 9,
                          "y": 95
                        },
                        {
                          "x": 10,
                          "y": 92
                        }
                      ]
           };

   }

  componentWillMount() {
    const responseChart = fetch('http://localhost:5000/aztecs/dashboards?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        this.setState({ data : response_data.response })
                        return response_data;
                      });

  }

	render()
	{
		const data_points = this.state.data;
			const options = {
    			animationEnabled: true,
    			exportEnabled: true,
    			theme: "light1",
    			title:{
    				text: "Reliability",
    				fontFamily:'Impact',
    				fontSize: 15
    			},
    			data: [{
    				type: "splineArea",
    				percentage: "3.8%",
                    increase: false,
                    decrease: true,
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
  export default ReliabilityChart;