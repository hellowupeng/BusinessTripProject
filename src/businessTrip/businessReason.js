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
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
    
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>出差原因</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.reasonTextInput}
            placeholder="点击填写（必填）"
            placeholderTextColor="#999999"
            value={this.state.value}
            onChange={(event) => this.onChangeText(event.nativeEvent.text)}
            onSubmitEditing={(event) => this.onChangeText(event.nativeEvent.text)}
          />
        </View>
      </View>
    );
  }

  onChangeText(text) {
    this.setState({ value: text});
  }
}