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
import BusinessType from './businessType';
import BusinessReason from './businessReason';
import Destination from './destination';
import Duration from './duration';
import EndDate from './endDate';
import Functions from '../common/Functions';
import Picker from 'react-native-picker';
import StartDate from './startDate';
import Submit from './submit';
import styles from './styles';
import Total from './total';
import TravelDetails from './travelDetails';

// 设置年月日以及获取日期
let selectedYear = Functions.getYear();
let selectedMonth = Functions.getMonth();
let selectedDay = Functions.getDay();
let selectedDateTemp = Functions.getNowFormatDate();

/**
 * 出差申请
 */

// 出差类型
const businessTypeData = ['L01 出差', 'L02 出差', 'L03 出差'];

// 出差时长
const durationData = ['1.5', '2.5', '3.5', '4.5'];

// 开始、结束时间
let dateData = {
  a: {
      a1: [1,2,3,4],
      a2: [5,6,7,8],
      a3: [9,10,11,12],
  },
  b: {
      b1: [1,2,3,4],
      b2: [5,6,7,8],
      b3: [9,10,12,12],
  }
};

// 费用种类
const speciesData = ['第一种', '第二种', '第三种'];

// 币种数据
const currencyData = ['RMB', 'USD'];

export default class BusinessTrip extends Component {
  mixins: [React.addons.PureRenderMixin]

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
      totalMoney: [],
      dateData: dateData,
      businessType: '',
      startDate: '',
      endDate: '',
    };
    this.applyForms = [];
    this.totalMoney = [];
  }

  componentDidMount() {
    for (let currencyItem of currencyData) {
      let moneyObject = {
        total: 0,
        currencyCategory: currencyItem,
      };
      this.totalMoney.push(moneyObject);
    }
    this.setState({
      pickerData: businessTypeData,
      dateData: Functions.createDateData(),
      totalMoney: [this.totalMoney[0]],
      businessType: businessTypeData[0],
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
            businessType={this.state.businessType}
          />
          <Destination />
          <StartDate
            ref="startDate"
            showPicker={(pickerData, selectedValue, type) => this.showPicker(pickerData, selectedValue, type)}
            pickerData={this.state.dateData}
            startDate={this.state.startDate}
          />
          <EndDate
            ref="endDate"
            showPicker={(pickerData, selectedValue, type) => this.showPicker(pickerData, selectedValue, type)}
            pickerData={this.state.dateData}
            endDate={this.state.endDate}
          />
          <Duration />
          <BusinessReason />
          <TravelDetails />
          { this.state.showAddButton ?
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
              removeClippedSubviews={false}
              enableEmptySections={true}
            /> : null }
          { this.state.showAddButton ?
            <AddButton addApplyForms={() => this.addApplyForms()} />
            : null }
        </ScrollView>
        { this.state.showAddButton ?
          <Total
            totalMoney={this.state.totalMoney}
          /> : null }
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
        <Picker
          ref="timePicker"
          style={{ height: 300 }}
          showDuration={300}
          showMask={true}
          pickerData={this.state.pickerData}
          selectedValue={this.state.selectedValue}
          onPickerDone={(data) => this.timePickerDone(data)}
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

  showTimePicker(pickerData, selectedValue, type) {
    this.pickerType = type;
    this.setState({
      pickerData: pickerData,
      selectedValue: selectedValue,
    });
    this.refs.timePicker.toggle();
  }

  showHoursAndMinutesPicker(type) {
    this.timePickerType = type;
    let hoursArray = Functions.createHoursArray();
    let minutesArray = Functions.createMinutesArray();
    let selectedHour = Functions.getHours();
    let selectedMinute = Functions.getMinutes();
    this.showTimePicker([hoursArray, minutesArray], [selectedHour, selectedMinute], type);
  }

  pickerDone(data) {
    switch (this.pickerType) {
      case 'businessType':
        this.setState({ businessType: data });
        break;

      case 'startDate':
        // console.log('data - ', data);
        let startDateYear = data[0];
        let startDateMonth = data[1];
        let startDateDay = data[2];
        this.startDateTime = `${startDateYear}-${startDateMonth}-${startDateDay}`;
        this.showHoursAndMinutesPicker('startDate');
        break;

      case 'endDate':
        let endDateYear = data[0];
        let endDateMonth = data[1];
        let endDateDay = data[2];
        this.endDateTime = `${endDateYear}-${endDateMonth}-${endDateDay}`;
        this.showHoursAndMinutesPicker('endDate');
        break;

      case 'species':
        this.applyForms[this.rowID].species = data[0];
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });
        break;

      case 'applyMoneyStartDate':
        let applyMoneyStartDateYear = data[0];
        let applyMoneyStartDateMonth = data[1];
        let applyMoneyStartDateDay = data[2];
        let applyMoneyStartDate = `${applyMoneyStartDateYear}-${applyMoneyStartDateMonth}-${applyMoneyStartDateDay}`;
        this.applyForms[this.rowID].startDate = applyMoneyStartDate;
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });
        break;

      case 'applyMoneyEndDate':
        let applyMoneyEndDateYear = data[0];
        let applyMoneyEndDateMonth = data[1];
        let applyMoneyEndDateDay = data[2];
        let applyMoneyEndDate = `${applyMoneyEndDateYear}-${applyMoneyEndDateMonth}-${applyMoneyEndDateDay}`;
        this.applyForms[this.rowID].endDate = applyMoneyEndDate;
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });
        break;

      case 'currency':
        // console.log('currency - ', data, this.rowID);
        this.applyForms[this.rowID].currencyCategory = data[0];
        // console.log('rowData - ', this.applyForms);
        this.setState({
          dataSource: this.ds.cloneWithRows(this.applyForms),
        });

        // Recalculate total money when change currency category.
        this.getTotalMoney();
        break;

      default:
        break;
    }
  }

  timePickerDone(data) {
    // console.log('time - ', data);
    let hour = data[0];
    let minute = data[1];
    let dateTime = `${hour}:${minute}`;
    switch(this.timePickerType) {
      case 'startDate':
        // console.log('startDate');
        this.setState({ startDate: `${this.startDateTime} ${dateTime}` });
        break;
      
      case 'endDate':
        // console.log('endDate');
        this.setState({ endDate: `${this.endDateTime} ${dateTime}` });
        break;

      default:
        break;
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <ApplyMoney
        key="${sectionID}-${rowID}"
        showPicker={(pickerData, selectedValue, type, row) => this.showPicker(pickerData, selectedValue, type, row)}
        calculateMoney={(money, row) => this.calculateMoney(money, row)}
        speciesData={speciesData}
        rowData={rowData}
        rowID={rowID}
        deleteOneApplyForm={(rowID) => this.deleteOneApplyForm(rowID)}
        saveApplyFormDetailInfo={(detailInfo, row) => this.saveApplyFormDetailInfo(detailInfo, row)}
        showPicker={(pickerData, selectedValue, type, row) => this.showPicker(pickerData, selectedValue, type, row)}
        pickerData={currencyData}
      />
    );
  }

  /**
   * 增加备用金申请
   */

  addApplyForms() {
    const rowData = {
      species: speciesData[0],
      startDate: selectedDateTemp,
      endDate: null,
      reason: '',
      sum: 0,
      currencyCategory: currencyData[0],
    };
    this.applyForms.push(rowData);
    this.setState({
      dataSource: this.ds.cloneWithRows(this.applyForms),
    });
  }

  /**
   * 计算金额
   */

  calculateMoney(money, row) {
    // console.log('Old applyForms - ', this.applyForms);
    this.applyForms[row].sum = money;
    // console.log('New applyForms - ', this.applyForms);

    this.getTotalMoney();
  }

  getTotalMoney() {
    for (let currencyItem of this.totalMoney) {
      let total = 0;
      for (let item of this.applyForms) {
        if (item.currencyCategory === currencyItem.currencyCategory) {
          total += item.sum;
        }
      }
      currencyItem.total = total;
    }

    let tempArray = [];
    for (let item of this.totalMoney) {
      if (item.total != 0) {
        tempArray.push(item);
      }
    }
    this.setState({ totalMoney: tempArray });
    // console.log('tempArray - ', tempArray);
  }

  deleteOneApplyForm(rowID) {
    // console.log('this.applyForms - ', this.applyForms, rowID);
    this.applyForms.splice(rowID, 1);
    // console.log('this.applyForms - ', this.applyForms);
    this.setState({ dataSource: this.ds.cloneWithRows(this.applyForms) });

    // Recalculate total money when delete a form.
    this.getTotalMoney();
  }

  saveApplyFormDetailInfo(detailInfo, row) {
    // console.log('DetailInfo - ', detailInfo, row);
    this.applyForms[row].reason = detailInfo;
    // console.log('Apply form - ', this.applyForms);
  }

}