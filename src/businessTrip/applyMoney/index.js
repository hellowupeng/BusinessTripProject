import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Bar from './bar';
import ChargeDetails from './chargeDetails';
import EndDate from './endDate';
import Species from './species';
import StartDate from './startDate';
import Sum from './sum';
import styles from './styles';

/**
 * 备用金申请
 */

export default class ApplyMoney extends Component {
  render() {
    return (
      <View>
        <Bar />
        <Species />
        <StartDate />
        <EndDate />
        <ChargeDetails />
        <Sum />
      </View>
    );
  }
}