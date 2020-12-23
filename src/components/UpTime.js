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

 class UpTimeChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data :  [
                        {
                          "label": "Up Time",
                          "y": 80.0
                        },
                        {
                          "label": "Down Time",
                          "y": 20.0
                        }
                      ]
           };

   }

  componentWillMount() {
    const upTimeResponse = fetch('http://localhost:5000/aztecs/upTime?start_date=' + encodeURIComponent(this.props.startExpDate) +'&end_date=' + encodeURIComponent(this.props.endExpDate))
                      .then(response => response.json())
                      .then(response_data => {
                        this.setState({ data : response_data.upTime })
                        return response_data;
                      });

  }

	render() {
	const data_points = this.state.data;
		const options = {
			animationEnabled: true,
			theme: "light2",
			title: {
				text: "UpTime/ downTime",
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
  export default UpTimeChart;