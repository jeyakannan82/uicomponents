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

 class SearchTypeChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                        {
                          "label": "Search",
                          "y": 2.0
                        },
                        {
                          "label": "Retrieve",
                          "y": 3.0
                        },
                        {
                          "label": "Suggest",
                          "y": 10.0
                        },
                        {
                          "label": "Download",
                          "y": 0.2
                        },
                        {
                          "label": "Multi Search",
                          "y": 5.0
                        }
                      ]
           };

   }

  componentWillMount() {
    const successResponse = fetch('http://localhost:5000/aztecs/experience?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        this.setState({ data : response_data.category })
                        return response_data;
                      });

  }

	render() {
	const data_points = this.state.data;
		const options = {
			animationEnabled: true,
			theme: "light2",
			title: {
				text: "Response time by services in seconds",
				fontFamily:'Impact',
				fontSize: 15
			},
			subtitles: [{
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "column",
				indexLabel: "{y}",
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
  export default SearchTypeChart;