import React, {
  Component,
  requireNativeComponent,
  processColor
} from 'react-native';

import {
  globalCommonProps,
  barLineCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';

let RNHorizontalBarChart = requireNativeComponent('RNHorizontalBarChartSwift', HorizontalBarChart);

class HorizontalBarChart extends Component {
  render() {
    let {config, ...otherProps} = this.props;
    config = processColors(config);
    return <RNHorizontalBarChart
      config={JSON.stringify(config)}
      {...otherProps}/>;
  }
};

HorizontalBarChart.propTypes = {
  config: React.PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    dataSets: React.PropTypes.arrayOf(React.PropTypes.shape({
      ...commonDataSetProps,
      barShadowColor: React.PropTypes.string,
      barSpace: React.PropTypes.number,
      highlightAlpha: React.PropTypes.number,
      highlightColor: React.PropTypes.string,
      highlightLineDashLengths: React.PropTypes.arrayOf(React.PropTypes.number),
      highlightLineDashPhase: React.PropTypes.number,
      highlightLineWidth: React.PropTypes.number,
      stackLabels: React.PropTypes.arrayOf(React.PropTypes.string)
    })),
    drawValueAboveBar: React.PropTypes.bool,
    drawHighlightArrow: React.PropTypes.bool,
    drawBarShadow: React.PropTypes.bool,
  })
};

export default HorizontalBarChart;
