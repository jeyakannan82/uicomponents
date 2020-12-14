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

 class ResponseChart extends React.Component {

   constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : null
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
    			theme: "light2",
    			title:{
    				text: "Response",
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
  export default ResponseChart;