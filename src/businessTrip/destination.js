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
 * 客户名称（目的地）
 */

export default class Destination extends Component {
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
        <Text style={styles.title}>客户名称</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.destinationTextInput}
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