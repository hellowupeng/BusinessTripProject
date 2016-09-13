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
 * 结束时间
 */

export default class EndDate extends Component {
  render() {
    return (
      <View style={[styles.rowContainer, { marginTop: 0, borderTopWidth: 1, borderColor: 'whitesmoke'}]}>
        <Text style={styles.title}>结束时间</Text>
        <TouchableOpacity style={styles.type}>
          <Text>请选择（必填）</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}