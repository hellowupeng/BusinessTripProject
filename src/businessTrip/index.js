import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AddButton from './add';
import ApplyMoney from './applyMoney/index';
import AddPhotos from './addPhotos';
import BusinessType from './businessType';
import BusinessReason from './businessReason';
import Destination from './destination';
import Duration from './duration';
import EndDate from './endDate';
import Picker from 'react-native-picker';
import StartDate from './startDate';
import Submit from './submit';
import styles from './styles';
import Total from './total';
import TravelDetails from './travelDetails';

/**
 * 出差申请
 */

// 出差类型
const businessTypeData = ['L01 出差', 'L02 出差', 'L03 出差'];

// 出差时长
const durationData = ['1.5', '2.5', '3.5', '4.5'];

// 开始、结束时间
const dateData = {
  a: {
      a1: [1,2,3,4],
      a2: [5,6,7,8],
      a3: [9,10,11,12]
  },
  b: {
      b1: [1,2,3,4],
      b2: [5,6,7,8],
      b3: [9,10,12,12]
  }
};

// 费用种类
const speciesData = ['第一种', '第二种', '第三种'];

export default class BusinessTrip extends Component {

  /**
   * showAddButton - 显示"增加备用金申请"
   * applyForms - "备用金申请表单"
   */

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      pickerData: ['1', '2', '3'],
      selectedValue: ['1'],
      showAddButton: true,
      dataSource: this.ds.cloneWithRows([]),
    };
    this.applyForms = [];
  }

  componentDidMount() {
    this.setState({
      pickerData: businessTypeData,
    });
  }
  
  render() {
    return (
      <View style={styles.flex}>
        <ScrollView style={[styles.flex, styles.background]}>
          <BusinessType
            ref="businessType"
            showPicker={(pickerData, selectedValue, type) => this.showPicker(pickerData, selectedValue, type)}
            pickerData={businessTypeData}
          />
          <Destination />
          <StartDate
            ref="startDate"
            showPicker={(pickerData, selectedValue, type) => this.showPicker(pickerData, selectedValue, type)}
            pickerData={dateData}
          />
          <EndDate
            ref="endDate"
            showPicker={(pickerData, selectedValue, type) => this.showPicker(pickerData, selectedValue, type)}
            pickerData={dateData}
          />
          <Duration />
          <BusinessReason />
          <TravelDetails />
          <AddPhotos />
          { this.state.showAddButton ?
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
            /> : null }
          { this.state.showAddButton ?
            <AddButton addApplyForms={() => this.addApplyForms()} />
            : null }
        </ScrollView>
        { this.state.showAddButton ?
          <Total /> : null }
        <Submit />

        <Picker
          ref="picker"
          style={{ height: 300 }}
          showDuration={300}
          showMask={true}
          pickerData={this.state.pickerData}
          selectedValue={this.state.selectedValue}
          onPickerDone={(data) => this.pickerDone(data)}
        />
      </View>
    );
  }

  /**
   * 显示Picker
   * type - 指定的Picker
   * row - 备用金申请表单row
   */

  showPicker(pickerData, selectedValue, type, row) {
    this.pickerType = type;
    this.rowID = row;
    this.setState({
      pickerData: pickerData,
      selectedValue: selectedValue,
    });
    this.refs.picker.toggle();
  }

  pickerDone(data) {
    switch (this.pickerType) {
      case 'businessType':
        this.refs.businessType.setState({ value: data });
        break;

      case 'startDate':
        this.refs.startDate.setState({ value: data });
        break;

      case 'endDate':
        this.refs.endDate.setState({ value: data });
        break;

      case 'species':
        this.applyForms[this.rowID].species = data[0];
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });
        break;

      case 'applyMoneyStartDate':
        this.applyForms[this.rowID].startDate = data;
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });
        break;

      case 'applyMoneyEndDate':
        this.applyForms[this.rowID].endDate = data;
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });
        break;
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <ApplyMoney
        key="${sectionID}-${rowID}"
        showPicker={(pickerData, selectedValue, type, row) => this.showPicker(pickerData, selectedValue, type, row)}
        speciesData={speciesData}
        dateData={dateData}
        rowData={rowData}
        rowID={rowID}
      />
    );
  }

  /**
   * 增加备用金申请
   */

  addApplyForms() {
    const rowData = {
      species: null,
      startDate: null,
      endDate: null,
      reason: null,
    };
    this.applyForms.push(rowData);
    this.setState({
      dataSource: this.ds.cloneWithRows(this.applyForms),
    });
  }

}