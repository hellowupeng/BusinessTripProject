import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 申请金额
 */

export default class Sum extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currencyValue: 'RMB',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currencyValue: nextProps.rowData.currencyCategory });
  }
  
  render() {
    let pickerData = this.props.pickerData;
    return (
      <View style={[styles.rowContainer, styles.line]}>
        <Text style={styles.title}>申请金额</Text>
        <View style={styles.type}>
          <TextInput
            style={styles.reasonTextInput}
            placeholder="0.00"
            placeholderTextColor="#999999"
            keyboardType="numeric"
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.nativeEvent.text });
            } }
            onSubmitEditing={(event) => {
              this.setState({ value: event.nativeEvent.text });
              this.postRowMoney(event.nativeEvent.text);
            } }
            onEndEditing={(event) => this.postRowMoney(event.nativeEvent.text) }
          />
          <Text
            style={styles.currency}
            onPress={() => this.props.showPicker(pickerData, pickerData[0], 'currency', this.props.rowID)}
          >
          {this.state.currencyValue}
          </Text>
        </View>
      </View>
    );
  }

  postRowMoney(text) {
    console.log('text - ', text);
    let sum = 0;
    if (text !== '') {
      sum = parseFloat(text);
    }
    this.props.calculateMoney(sum, this.props.rowID);
  }
}