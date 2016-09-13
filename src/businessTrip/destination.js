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
 * 拜访客户（目的地）
 */

export default class Destination extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>拜访客户</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.destinationTextInput}
            placeholder="客户名称"
          />
        </View>
      </View>
    );
  }
}