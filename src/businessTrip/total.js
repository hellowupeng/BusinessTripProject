import React, { Component } from 'react';
import {
  ListView,
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

/**
 * 金额汇总
 */

export default class Total extends Component {
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log('Total money - ', nextProps.totalMoney);
    this.setState({ dataSource: this.ds.cloneWithRows(nextProps.totalMoney)}); 
  }

  render() {
    return (
      <View style={styles.totalContainer}>
        <View style={styles.totalTitleView}>
          <Text style={styles.totalTitle}>金额汇总</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
          removeClippedSubviews={false}
          enableEmptySections={true}
          bounces={false}
          contentContainerStyle={styles.totalListView}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View style={styles.totalRow}>
        { rowID != 0 ?
          <Text style={styles.value}>+  </Text> : null }
        <Text style={styles.value}>{rowData.total} </Text>
        <Text style={styles.currency}>{rowData.currencyCategory}</Text>
      </View>
    );
  }
}