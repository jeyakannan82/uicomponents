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

 class NPSScore extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : null
           };

   }

  componentWillMount() {
    const npsResponse = fetch('http://localhost:5000/aztecs/custScores?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        console.log(response_data);
                        this.setState({ data : response_data.npsScore })
                        return response_data;
                      });

  }

 	render() {
 	    const data_points = this.state.data
 		const options = {
 			animationEnabled: true,
 			exportFileName: "NPS Score",
 			exportEnabled: true,
 			title:{
 				text: "NPS Score"
 			},
 			data: [{
 				type: "pie",
 				showInLegend: true,
 				legendText: "{label}",
 				toolTipContent: "{label}: <strong>{y}%</strong>",
 				indexLabel: "{y}%",
 				indexLabelPlacement: "inside",
 				dataPoints: data_points
 			}]
 		}
 		return (
 			<CanvasJSChart options = {options}
 				/* onRef={ref => this.chart = ref} */
 			/>
 		);
 	}
 }
 export default NPSScore;