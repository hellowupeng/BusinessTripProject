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
 * 结束时间
 */

export default class EndDate extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pickerData: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pickerData: nextProps.pickerData,
      value: nextProps.endDate,
    });
  }
  
  render() {
    return (
      <View style={[styles.rowContainer, { marginTop: 0}, styles.borderTopLine]}>
        <Text style={styles.title}>结束时间</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.state.pickerData, [selectedYear.toString(), selectedMonth, selectedDay], 'endDate')}
        >
          <Text style={styles.value}>{this.state.value === '' ? '点击填写（必填）' : this.state.value}</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}