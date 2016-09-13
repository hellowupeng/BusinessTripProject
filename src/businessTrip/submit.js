import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 提交出差申请
 */

export default class Submit extends Component {
  render() {
    return (
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>提交</Text>
        </TouchableOpacity>
      </View>
    );
  }
}