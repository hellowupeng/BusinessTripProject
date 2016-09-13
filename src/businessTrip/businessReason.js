import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 出差原因
 */

export default class BusinessReason extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>出差原因</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.reasonTextInput}
            placeholder="点击填写（必填）"
          />
        </View>
      </View>
    );
  }
}