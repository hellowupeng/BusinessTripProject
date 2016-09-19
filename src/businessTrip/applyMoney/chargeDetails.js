import React, { Component } from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 费用明细
 */

export default class chargeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <View style={[styles.chargeDetails, styles.line]}>
        <TextInput
          style={styles.chargeDetailsTextInput}
          placeholder="请输入详细描述"
          multiline={true}
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.nativeEvent.text }) }
          onSubmitEditing={(event) => this.setState({ value: event.nativeEvent.text }) }
        />
      </View>
    );
  }
}