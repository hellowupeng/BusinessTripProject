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

  constructor(props) {
    super(props);
  }

  render() {
    let rowID = this.props.rowID;
    return (
      <View style={styles.bar}>
        <Text style={styles.barText}>备用金申请 {rowID == 0 ? null : parseInt(rowID) + 1}</Text>
      </View>
    );
  }
}