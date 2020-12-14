
import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class CustomerSatisfactionScore extends React.Component {
 constructor(props) {
     super(props);
     console.log(props);
      this.state = {
             data : [
                        {
                          "name": "Very satisfied",
                          "y": 0.0
                        },
                        {
                          "name": "Satisfied",
                          "y": 12.0
                        },
                        {
                          "name": "Neutral",
                          "y": 33.0
                        },
                        {
                          "name": "Un satisfied",
                          "y": 46.0
                        },
                        {
                          "name": "Very unsatisfied",
                          "y": 9.0
                        }
                      ],
             month_score: 75
           };

   }

  componentWillMount() {
    const npsResponse = fetch('http://localhost:5000/aztecs/custScores?countryTotal=IN')
                      .then(response => response.json())
                      .then(response_data => {
                        console.log(response_data);
                        this.setState({ data : response_data.satisfactions, month_score : response_data.monthScore })
                        return response_data;
                      });

  }
	render() {
	const data_points = this.state.data;
	const month_score = this.state.month_score;
		const options = {
			animationEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
			subtitles: [{
				text: month_score+"% Positive",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
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

export default CustomerSatisfactionScore;