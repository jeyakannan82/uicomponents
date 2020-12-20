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
 sortMyArray(myArray ){
     return myArray.sort((a, b) => {
      return a.x < b.x ? 1 : -1;
  });
}
  componentWillMount() {
    const responseChart = fetch('http://localhost:5000/aztecs/dashboards?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        var dataPoints = [];

                        for (var cnt = 0; cnt <= response_data.response.length; cnt++) {
                        console.log(response_data.response[cnt])
                        if(response_data.response[cnt]){
                            dataPoints.push({
                                               x: new Date(response_data.response[cnt].x),
                                               y: response_data.response[cnt].y
                                             });
                        }


                        }
                        console.log("response chart---")
                        console.log(response_data.response)
                        this.setState({ data : dataPoints})
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
                    color: "rgb(185, 116, 85)",
                    showInLegend: true,
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