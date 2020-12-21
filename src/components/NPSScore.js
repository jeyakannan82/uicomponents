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
             data : [
                        {
                          "label": "promoters",
                          "y": 60
                        },
                        {
                          "label": "passives",
                          "y": 20
                        },
                        {
                          "label": "detractors",
                          "y": 20
                        }
                      ]
           };

   }

  componentDidMount() {
    const npsResponse = fetch('http://localhost:5000/aztecs/npsScore?start_date=' + encodeURIComponent(this.props.dates[0]) +'&end_date=' + encodeURIComponent(this.props.dates[1]))
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
 				text: "NPS Score",
 				fontSize: 15
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