import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * 拜访客户（目的地）
 */

export default class Destination extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>拜访客户</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="客户名称"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    height: 44,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginLeft: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
    width: 100,
  }
});