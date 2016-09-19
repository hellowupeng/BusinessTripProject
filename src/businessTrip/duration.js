import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 时长
 */

export default class Duration extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>时长</Text>
        <View style={styles.type}>
          <Text style={styles.value}>0.0 工时</Text>
        </View>
      </View>
    );
  }
}