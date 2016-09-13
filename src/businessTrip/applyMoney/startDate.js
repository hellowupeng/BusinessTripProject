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
 */

export default class StartDate extends Component {
  render() {
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>开始日期</Text>
        <TouchableOpacity style={styles.type}>
          <Text>2016-5-24</Text>
          <Image
            style={styles.image}
            source={require('../../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}