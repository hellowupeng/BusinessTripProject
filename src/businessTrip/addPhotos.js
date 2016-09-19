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
            source={require('../../images/list_add_pic.png')}
            style={styles.addPhotosImg}
          />
        </TouchableOpacity>
        <Text style={styles.addPicturesText}>添加照片</Text>
      </View>
    );
  }
}