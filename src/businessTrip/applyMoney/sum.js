import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 申请金额
 */

export default class Sum extends Component {
  render() {
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>申请金额</Text>
        <View style={styles.type}>
          <TextInput
            style={styles.reasonTextInput}
            placeholder="0.00"
            placeholderTextColor="#999999"
          />
          <Text style={styles.currency}>RMB</Text>
        </View>
      </View>
    );
  }
}