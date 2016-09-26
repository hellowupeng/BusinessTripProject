import {
  Dimensions,
  StyleSheet,
} from 'react-native';

/**
 * "出差申请"样式
 */

let { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  background: {
    backgroundColor: '#f0eff5',
  },
  color: {
    color: '#1fd762',
  },
  borderTopLine: {
    borderTopWidth: 1,
    borderColor: '#f0eff5',
  },
  rowContainer: {
    marginTop: 11,
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
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },

  // 出差原因TextInput
  reasonTextInput: {
    height: 40,
    width: 115,
    fontSize: 14,
    color: '#999999',
  },

  // destination
  // 拜访客户TextInput
  destinationTextInput: { 
    height: 40,
    width: 115,
    fontSize: 14,
    color: '#999999',
  },

  // 添加备用金申请
  addButtonContainer: { 
    width: width,
    height: 44,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  addButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 提交按钮
  submitContainer: { 
    width: width,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  submitButton: {
    backgroundColor: '#1fd662',
    width: 244,
    height: 44,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontSize: 17,
  },

  // Total Money
  totalContainer: {
    height: 48,
    width: width,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  totalTitleView: {
    flex: 1,
    justifyContent: 'center',
  },
  totalTitle: {
    marginLeft: 18,
    fontSize: 16,
    color: '#333333',
  },
  totalListView: {
    justifyContent: 'center',
    paddingVertical: 15,
  },
  totalRow: {
    flexDirection: 'row',
    height: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 11,
  },

  currency: {
    color: '#1fd762',
    marginHorizontal: 5,
  },

  // TravelDetails
  travelRow: {
    marginTop: 11,
    paddingTop: 8,
    paddingHorizontal: 18,
    height: 100,
    width: width,
    backgroundColor: 'white',
  },
  travelTextInput: {
    height: 100,
    width: width,
    fontSize: 14,
  },

  // AddPhotos
  addPhotosRow: {
    width: width,
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPhotosImg: {
    marginHorizontal: 18,
    width: 45,
    height: 45,
  },
  addPicturesText: {
    fontSize: 14,
    color: '#cccccc',
  },
});

module.exports = styles;