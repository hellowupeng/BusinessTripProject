import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

/**
 * Bar
 */

export default class Bar extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
  }

  render() {
    let rowID = this.props.rowID;
    return (
      <View style={styles.bar}>
        <Text style={styles.barText}>备用金申请 {rowID == 0 ? null : parseInt(rowID) + 1}</Text>
        <Text
          style={styles.deleteButton}
          onPress={() => this.deleteApplyForm() }
        >
        删除
        </Text>
      </View>
    );
  }

  deleteApplyForm() {
    // console.log('delete apply form.', this.props.rowID);
    this.props.deleteOneApplyForm(this.props.rowID);
  }
}