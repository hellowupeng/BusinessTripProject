import React, { Component } from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 详细行程
 */

export default class TravelDetails extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  
  render() {
    return (
      <View style={styles.travelRow}>
        <TextInput
          style={styles.travelTextInput}
          placeholder="请输入详细行程..."
          multiline={true}
          value={this.state.value}
          onChange={(event) => this.onChangeText(event.nativeEvent.text)}
          onSubmitEditing={(event) => this.onChangeText(event.nativeEvent.text)}
        />
      </View>
    );
  }

  onChangeText(text) {
    this.setState({ value: text});
  }
}