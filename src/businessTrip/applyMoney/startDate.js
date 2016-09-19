import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 开始日期
 * 格式 - 2016-5-24
 */

export default class StartDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '测试',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.rowData.startDate });
  }

  render() {
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>开始日期</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.props.dateData, ['a', 'a1', 1], 'applyMoneyStartDate', this.props.rowID)}
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