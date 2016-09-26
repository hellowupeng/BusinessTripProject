import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 时长
 */

export default class Duration extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.state = {
      value: '0.0',
    };
  }
  
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>时长</Text>
        <View style={styles.type}>
          <Text style={styles.value}>{`${this.state.value} 工时`}</Text>
        </View>
      </View>
    );
  }
}