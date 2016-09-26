import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Functions from '../../common/Functions';
import styles from './styles';

// 设置年月日以及获取日期
let selectedYear = Functions.getYear();
let selectedMonth = Functions.getMonth();
let selectedDay = Functions.getDay();
let selectedDateTemp = Functions.getNowFormatDate();

/**
 * 开始日期
 * 格式 - 2016-5-24
 */

export default class StartDate extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: selectedDateTemp,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.rowData.startDate,
    });
  }

  render() {
    let dateData = Functions.createDateData();
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>开始日期</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(dateData, [selectedYear.toString(), selectedMonth, selectedDay], 'applyMoneyStartDate', this.props.rowID)}
        >
          <Text style={styles.value}>{this.state.value}</Text>
          <Image
            style={styles.image}
            source={require('../../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}