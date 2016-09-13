import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 添加备用金申请
 */

export default class AddButton extends Component {
  render() {
    return (
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Image
            source={require('../../images/add.png')}
            style={styles.image}
          />
          <Text style={[styles.color, { marginLeft: 5 }]}>增加备用金申请</Text>
        </TouchableOpacity>
      </View>
    );
  }
}