import React, { Component } from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 费用明细
 */

export default class chargeDetails extends Component {
  render() {
    return (
      <View style={[styles.chargeDetails, styles.line]}>
        <TextInput
          style={styles.chargeDetailsTextInput}
          placeholder="请输入详细描述"
          multiline={true}
        />
      </View>
    );
  }
}