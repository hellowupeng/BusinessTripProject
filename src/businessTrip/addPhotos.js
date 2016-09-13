import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 添加照片
 */

export default class AddPhotos extends Component {
  render() {
    return (
      <View style={styles.addPhotosRow}>
        <TouchableOpacity>
          <Image
            source={require('../../images/add.png')}
            style={[styles.image, styles.addPhotosImg]}
          />
        </TouchableOpacity>
        <Text style={[styles.color, { marginLeft: 5 }]}>添加照片</Text>
      </View>
    );
  }
}