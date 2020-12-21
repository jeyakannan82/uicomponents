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

 class ResponseByService extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                        {
                          "label": "search",
                          "y": 9.79
                        },
                        {
                          "label": "retrieve",
                          "y": 19.86
                        },
                        {
                          "label": "suggest",
                          "y": 20.54
                        },
                        {
                          "label": "download",
                          "y": 9.87
                        },
                        {
                          "label": "multisearch",
                          "y": 39.94
                        }
                      ]
           };

   }

  componentDidMount() {
    const npsResponse = fetch('http://localhost:5000/aztecs/activityByAction?start_date=' + encodeURIComponent(this.props.dates[0]) +'&end_date=' + encodeURIComponent(this.props.dates[1]))
                      .then(response => response.json())
                      .then(response_data => {
                        console.log(response_data);
                        this.setState({ data : response_data.activityByAction })
                        return response_data;
                      });

  }


	render() {
	 	    const data_points = this.state.data

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "User Activity by api",
				fontSize: 15
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",
				startAngle: -90,
				dataPoints: data_points
			}]
		}

		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
 }
 export default ResponseByService;