import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const data = [
  { Day: '1', PreviousMonth: 2, CurrentMonth: 7 },
  { Day: '2', PreviousMonth: 2, CurrentMonth: 7 },
  { Day: '3', PreviousMonth: 3, CurrentMonth: 7 },
  { Day: '4', PreviousMonth: 2, CurrentMonth: 4 },
  { Day: '5', PreviousMonth: 2, CurrentMonth: 5 },
  { Day: '6', PreviousMonth: 5, CurrentMonth: 7 },
  { Day: '7', PreviousMonth: 5, CurrentMonth: 7 },
  { Day: '8', PreviousMonth: 6, CurrentMonth: 8 },
  { Day: '9', PreviousMonth: 6, CurrentMonth: 8 },
  { Day: '10', PreviousMonth: 6, CurrentMonth: 8 },
  { Day: '11', PreviousMonth: 6, CurrentMonth: 9 },
  { Day: '12', PreviousMonth: 6, CurrentMonth: 9 },
];

const chartRootStyles = {
  chart: {
    paddingRight: '20px',
  },
};
const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
};
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
  },
});
const legendItemStyles = {
  item: {
    flexDirection: 'column',
  },
};

const ChartRootBase = ({ classes, ...restProps }) => (
  <Chart.Root {...restProps} className={classes.chart} />
);
const LegendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item {...restProps} className={classes.item} />
);
const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

export default class CustomerExperienceTrend extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  componentDidMount() {
  console.log('http://localhost:5000/aztecs/customer_experience?start_date=' + encodeURIComponent(this.props.startDate) +'&end_date=' + encodeURIComponent(this.props.endDate));
    const npsResponse = fetch('http://localhost:5000/aztecs/customer_experience?start_date=' + encodeURIComponent(this.props.startDate) +'&end_date=' + encodeURIComponent(this.props.endDate))
                      .then(response => response.json())
                      .then(response_data => {
                        console.log(response_data);
                        this.setState({ data : response_data.experience })
                        return response_data;
                      });

  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Paper>
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries
            name="CurrentMonth"
            valueField="CurrentMonth"
            argumentField="Day"
          />
          <AreaSeries
            name="PreviousMonth"
            valueField="PreviousMonth"
            argumentField="Day"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
          <Title
            text="Customer Experience Overview"
          />
        </Chart>
      </Paper>
    );
  }
}
