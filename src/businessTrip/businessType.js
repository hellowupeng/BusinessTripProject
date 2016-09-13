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
 * 出差类型
 */

export default class BusinessType extends Component {
  render() {
    return (
      <View style={[styles.rowContainer, { marginTop: 54 }]}>
        <Text style={styles.title}>出差类型</Text>
        <TouchableOpacity style={styles.type}>
          <Text>L01 出差</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}