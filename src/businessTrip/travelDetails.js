import React, { Component } from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 详细行程
 */

export default class TravelDetails extends Component {
  render() {
    return (
      <View style={styles.travelRow}>
        <TextInput
          style={styles.travelTextInput}
          placeholder="请输入详细行程..."
          multiline={true}
        />
      </View>
    );
  }
}