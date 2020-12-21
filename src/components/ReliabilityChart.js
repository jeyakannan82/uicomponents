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
     if(props.reliability){
      this.state = {
                  data : props.reliability
                };
     }else{
      this.state = {
                  data : [
                             {
                               "x":  new Date("2020-12-11T23:59:59Z"),
                               "y": 87
                             },
                             {
                               "x": new Date("2020-12-12T23:59:59Z"),
                               "y": 97
                             },
                             {
                               "x": new Date("2020-12-13T23:59:59Z"),
                               "y": 89
                             },
                             {
                               "x": new Date("2020-12-14T23:59:59Z"),
                               "y": 97
                             },
                             {
                               "x": new Date("2020-12-15T23:59:59Z"),
                               "y": 99
                             },
                             {
                               "x": new Date("2020-12-16T23:59:59Z"),
                               "y": 97
                             },
                             {
                               "x": new Date("2020-12-17T23:59:59Z"),
                               "y": 98
                             },
                             {
                               "x": new Date("2020-12-18T23:59:59Z"),
                               "y": 99
                             },
                             {
                               "x": new Date("2020-12-19T23:59:59Z"),
                               "y": 95
                             },
                             {
                               "x": new Date("2020-12-20T23:59:59Z"),
                               "y": 92
                             }
                           ]
                };
     }


   }

  componentDidMount() {
    const responseChart = fetch('http://localhost:5000/aztecs/reliability?start_date=' + encodeURIComponent(this.props.dates[0]) +'&end_date=' + encodeURIComponent(this.props.dates[1]))
                      .then(response => response.json())
                      .then(response_data => {
                      console.log(response_data.reliability)
                      var dataPoints = [];
                      for(var cnt = 0 ;cnt<response_data.reliability.length;cnt++ )
                      {

                                dataPoints.push({
                                                   x: new Date(response_data.reliability[cnt].x),
                                                   y: response_data.reliability[cnt].y
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
    			zoomEnabled: true,
    			theme: "light1",
    			title:{
    				text: "Reliability",
    				fontFamily:'Impact',
    				fontSize: 15
    			},
    			data: [{
    				type: "splineArea",
    				showInLegend: true,
    				color: "rgb(237, 184, 121)",
                    increase: false,
                    xValueFormatString: "YYYY-MM-DDThh:mm:sZ",
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