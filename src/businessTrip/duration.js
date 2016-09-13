import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 时长
 */

export default class Duration extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>时长</Text>
        <TouchableOpacity style={styles.type}>
          <Text>0.0工时</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}