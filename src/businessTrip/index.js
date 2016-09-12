import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import BusinessType from './businessType';
import Destination from './destination';
import StartDate from './startDate';

/**
 * 出差申请
 */

export default class BusinessTrip extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <BusinessType />
        <Destination />
        <StartDate />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});