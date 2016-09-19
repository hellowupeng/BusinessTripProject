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
        <Bar rowID={this.props.rowID}/>
        <Species
          showPicker={(pickerData, selectedValue, type, row) => this.props.showPicker(pickerData, selectedValue, type, row)}
          speciesData={this.props.speciesData}
          rowData={this.props.rowData}
          rowID={this.props.rowID}
        />
        <StartDate
          showPicker={(pickerData, selectedValue, type, row) => this.props.showPicker(pickerData, selectedValue, type, row)}
          dateData={this.props.dateData}
          rowData={this.props.rowData}
          rowID={this.props.rowID}
        />
        <EndDate
          showPicker={(pickerData, selectedValue, type, row) => this.props.showPicker(pickerData, selectedValue, type, row)}
          dateData={this.props.dateData}
          rowData={this.props.rowData}
          rowID={this.props.rowID}
        />
        <ChargeDetails
          rowID={this.props.rowID}
        />
        <Sum />
      </View>
    );
  }
}