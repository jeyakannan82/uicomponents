import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";
import { Card, CardBody } from "shards-react";

import Chart from "../utils/chart.js";

class SmallStatus extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          enabled: true,
          custom: true
        },
        elements: {
          point: {
            radius: 3
          },
          line: {
            tension: 0.33
          }
        },
    scales: {
      yAxes: [{
        ticks:{
          min : 0,
          stepSize : this.props.stepSize,
          fontColor : "#000",
          fontSize : 10
        },
        gridLines:{
          color: "#000",
          lineWidth:1,
          zeroLineColor :"#000",
          zeroLineWidth : 2
        },
        stacked: true
      }],
      xAxes: [{
      	ticks:{
          fontColor : "#000",
          fontSize : 10
        },
        gridLines:{
          color: "#fff",
          lineWidth:1
        }
      }]
    },
      },
      ...this.props.chartOptions
    };

    const chartConfig = {
      ...{
        type:  this.props.type,
        animationEnabled: true,
        theme: "dark",
        data: {
          ...{
            labels: this.props.chartLabels
          },
          ...{
            datasets: this.props.chartData
          }
        },
        options: chartOptions
      },
      ...this.props.chartConfig
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { variation, label, value, percentage, increase } = this.props;

    const cardClasses = classNames(
      "stats-small",
      variation && `stats-small--${variation}`
    );

    const cardBodyClasses = classNames(
      variation === "1" ? "p-0 d-flex" : "px-0 pb-0"
    );

    const innerWrapperClasses = classNames(
      "d-flex",
      variation === "1" ? "flex-column m-auto" : "px-3"
    );

    const dataFieldClasses = classNames(
      "stats-small__data",
      variation === "1" && "text-center"
    );

    const labelClasses = classNames(
      "stats-small__label",
      "text-uppercase",
      variation !== "1" && "mb-1"
    );

    const valueClasses = classNames(
      "stats-small__value",
      "count",
      variation === "1" ? "my-3" : "m-0"
    );

    const innerDataFieldClasses = classNames(
      "stats-small__data",
      variation !== "1" && "text-right align-items-center"
    );

    const percentageClasses = classNames(
      "stats-small__percentage",
      `stats-small__percentage--${increase ? "increase" : "decrease"}`
    );

    const canvasHeight = variation === "1" ? 120 : 60;

    return (
      <Card small className={cardClasses}>
        <CardBody className={cardBodyClasses}>
          <canvas
            height={canvasHeight}
            ref={this.canvasRef}
            className={`stats-small-${shortid()}`}
          />
        </CardBody>
      </Card>
    );
  }
}

SmallStatus.propTypes = {
  /**
   * The Small Stats variation.
   */
  variation: PropTypes.string,
  /**
   * The label.
   */
  label: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The percentage number or string.
   */
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether is a value increase, or not.
   */
  increase: PropTypes.bool,
  /**
   * The Chart.js configuration object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options object.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.array.isRequired,
  /**
   * The chart labels.
   */
  chartLabels: PropTypes.array
};

SmallStatus.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  label: "Label",
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: []
};

export default SmallStatus;