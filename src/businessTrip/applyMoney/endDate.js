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
 * 结束日期
 */

export default class EndDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '请选择（必填）',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.rowData.endDate });
  }

  render() {
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>结束日期</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.props.dateData, ['a', 'a1', 1], 'applyMoneyEndDate', this.props.rowID)}
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