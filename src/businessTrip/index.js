import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AddButton from './add';
import ApplyMoney from './applyMoney/index';
import AddPhotos from './addPhotos';
import BusinessType from './businessType';
import BusinessReason from './businessReason';
import Destination from './destination';
import Duration from './duration';
import EndDate from './endDate';
import StartDate from './startDate';
import Submit from './submit';
import styles from './styles';
import Total from './total';
import TravelDetails from './travelDetails';

/**
 * 出差申请
 */

export default class BusinessTrip extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <ScrollView style={[styles.flex, styles.background]}>
          <BusinessType />
          <Destination />
          <StartDate />
          <EndDate />
          <Duration />
          <BusinessReason />
          <TravelDetails />
          <AddPhotos />
          <ApplyMoney />
          <AddButton />
        </ScrollView>
        <Total />
        <Submit />
      </View>
    );
  }
}