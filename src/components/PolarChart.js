import React from "react";


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


class PolarChart extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {


  }

  render() {
      const chartOptions = {
              	//Boolean - Show a backdrop to the scale label
              	scaleShowLabelBackdrop : true,

              	//String - The colour of the label backdrop
              	scaleBackdropColor : "rgba(255,255,255,0.75)",

              	// Boolean - Whether the scale should begin at zero
              	scaleBeginAtZero : true,

              	//Number - The backdrop padding above & below the label in pixels
              	scaleBackdropPaddingY : 2,

              	//Number - The backdrop padding to the side of the label in pixels
              	scaleBackdropPaddingX : 2,

              	//Boolean - Show line for each value in the scale
              	scaleShowLine : true,

              	//Boolean - Stroke a line around each segment in the chart
              	segmentShowStroke : true,

              	//String - The colour of the stroke on each segment.
              	segmentStrokeColor : "#fff",

              	//Number - The width of the stroke value in pixels
              	segmentStrokeWidth : 2,

              	//Number - Amount of animation steps
              	animationSteps : 100,

              	//String - Animation easing effect.
              	animationEasing : "easeOutBounce",

              	//Boolean - Whether to animate the rotation of the chart
              	animateRotate : true,

              	//Boolean - Whether to animate scaling the chart from the centre
              	animateScale : false,

              }
                const { title } = this.props;
    var PolarAreaChart = require("react-chartjs").PolarArea;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
            <PolarAreaChart data={[]} options={chartOptions}/>
        </CardBody>
      </Card>
    );
  }
}

PolarChart.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

PolarChart.defaultProps = {
  title: "Customer Experience Overview",
  data : [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Promoters"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label:  "Passives"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label:  "Detractors"
        }
    ]

};

export default PolarChart;
