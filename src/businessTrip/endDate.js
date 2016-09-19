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
 * 结束时间
 */

export default class EndDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '请选择（必填）',
    };
  }
  render() {
    return (
      <View style={[styles.rowContainer, { marginTop: 0}, styles.borderTopLine]}>
        <Text style={styles.title}>结束时间</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.props.pickerData, ['a', 'a1', 1], 'endDate')}
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