import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class StartDate extends Component {
  render() {
    return (
      <View style={styles.container}>
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
  type: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  image: {
    width: 20,
    height: 20,
  }
});