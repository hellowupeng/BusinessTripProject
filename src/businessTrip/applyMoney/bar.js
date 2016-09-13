import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

/**
 * Bar
 */

export default class Bar extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Text>备用金申请</Text>
      </View>
    );
  }
}