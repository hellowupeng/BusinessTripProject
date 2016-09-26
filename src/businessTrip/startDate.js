import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Functions from '../common/Functions';
import styles from './styles';

// 设置年月日以及获取日期
let selectedYear = Functions.getYear();
let selectedMonth = Functions.getMonth();
let selectedDay = Functions.getDay();
let selectedDateTemp = Functions.getNowFormatDate();

/**
 * 开始时间
 */

export default class StartDate extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: `${selectedDateTemp} 00:00`,
      pickerData: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pickerData: nextProps.pickerData,
      value: nextProps.startDate === '' ? this.state.value : nextProps.startDate,
    }); 
  }

  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>开始时间</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.state.pickerData, [selectedYear.toString(), selectedMonth, selectedDay], 'startDate')}
        >
          <Text style={styles.value}>{this.state.value}</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}