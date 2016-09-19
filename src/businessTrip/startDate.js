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
 * 开始时间
 */

export default class StartDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "2017.07.24 8:30",
    };
  }

  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>开始时间</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.props.pickerData, ['a', 'a1', 1], 'startDate')}
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