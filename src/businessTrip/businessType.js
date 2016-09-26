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
  mixins: [React.addons.PureRenderMixin]
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.businessType });
  }

  render() {
    return (
      <View style={[styles.rowContainer, { marginTop: 54 }]}>
        <Text style={styles.title}>出差类型</Text>
        <TouchableOpacity
          style={styles.type}
          onPress={() => this.props.showPicker(this.props.pickerData, this.props.pickerData[0], 'businessType')}
        >
          <Text style={styles.value}>{this.state.value}</Text>
          <Image
            style={styles.image}
            source={require('../../images/forward.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}