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
 * 开始时间
 */

export default class StartDate extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>开始时间</Text>
        <TouchableOpacity style={styles.type}>
          <Text>2016.05.24 8:30</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}