import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 金额汇总
 */

export default class Total extends Component {
  render() {
    return (
      <View style={styles.totalRow}>
        <Text style={styles.title}>金额汇总</Text>
        <View style={styles.type}>
          <Text style={styles.value}>0.00</Text>
          <Text style={styles.currency}>RMB</Text>
        </View>
      </View>
    );
  }
}