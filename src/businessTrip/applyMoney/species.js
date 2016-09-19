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

  constructor(props) {
    super(props);
    this.state = {
      value: '测试',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.rowData.species });
  }

  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.title}>费用种类</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.props.speciesData, this.props.speciesData[0], 'species', this.props.rowID)}
        >
          <Text style={styles.value}>{this.state.value}</Text>
          <Image
            style={styles.image}
            source={require('../../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}