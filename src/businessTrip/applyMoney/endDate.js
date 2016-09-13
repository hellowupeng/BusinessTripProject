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
  render() {
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>结束日期</Text>
        <TouchableOpacity style={styles.type}>
          <Text>请选择（必填）</Text>
          <Image
            style={styles.image}
            source={require('../../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}