import {
  Dimensions,
  StyleSheet,
} from 'react-native';

/**
 * "备用金申请"样式
 */

let { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    height: 48,
    width: width,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  // 行标题
  title: { 
    flex: 1,
    marginLeft: 18,
    fontSize: 16,
    color: '#333333',
  },

  type: {
    flex: 1,
    paddingRight: 11,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },

  // 行右边取值
  value: {
    fontSize: 14,
    color: '#999999',
    marginRight: 5,
  },

  image: {
    width: 20,
    height: 20,
  },

  // Bar
  bar: {
    width: width,
    height: 30,
    backgroundColor: '#f0eff5',
    alignItems: 'center',
    paddingLeft: 18,
    flexDirection: 'row',
  },
  barText: {
    fontSize: 14,
    color: '#999999',
    flex: 1,
  },
  deleteButton: {
    marginRight: 18,
    color: 'red',
    fontSize: 14,
    justifyContent: 'flex-end',
  },

  // chargeDetails
  chargeDetails: {
    width: width,
    height: 100,
    backgroundColor: 'white',
  },

  chargeDetailsTextInput: {
    width:width,
    height: 100,
    fontSize: 14,
    paddingTop: 8,
    paddingHorizontal: 18,
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#f0eff5',
  },

  // Sum
  currency: {
    color: '#1fd762',
    marginHorizontal: 5,
  },

  // 申请金额textInput
  reasonTextInput: {
    height: 40,
    width: 55,
    fontSize: 14,
    color: '#999999',
    // fontWeight: 'bold',
  },
});

module.exports = styles;