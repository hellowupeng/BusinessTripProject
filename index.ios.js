/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import BusinessTrip from './src/businessTrip/index';

/**
 * Navigator
 */

class BusinessTripProject extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{ title: '出差申请', component: BusinessTrip }}
          renderScene={(route, navigator) => <route.component navigator={navigator} />}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                  { return null; },
                RightButton: (route, navigator, index, navState) =>
                  { return null; },
                Title: (route, navigator, index, navState) =>
                  { return (<Text>出差申请</Text>); },
              }}
              style={{ backgroundColor: '#ccc', height: 44, }}
            />
          }
          style={{ marginTop: 20 }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BusinessTripProject', () => BusinessTripProject);
