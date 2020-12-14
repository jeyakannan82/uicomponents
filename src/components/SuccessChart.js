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

 class SuccessChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : null
           };

   }

  componentWillMount() {
    const successResponse = fetch('http://localhost:5000/aztecs/experience?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        this.setState({ data : response_data.successRate })
                        return response_data;
                      });

  }

	render() {
	const data_points = this.state.data;
		const options = {
			animationEnabled: true,
			theme: "light2",
			title: {
				text: "Failures/Success Transactions in %",
				fontFamily:'Impact',
				fontSize: 15
   			},
			subtitles: [{
				verticalAlign: "center",
				fontSize: 5,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "column",
				indexLabel: "{y}",
				yValueFormatString: "#,###'%'",
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
  export default SuccessChart;