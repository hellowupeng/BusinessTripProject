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
 * 费用种类
 */

export default class Species extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>费用种类</Text>
        <TouchableOpacity style={styles.type}>
          <Text>请选择</Text>
          <Image
            style={styles.image}
            source={require('../../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}