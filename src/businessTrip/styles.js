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
    backgroundColor: 'whitesmoke',
  },
  color: {
    color: '#1fd662',
  },
  borderTopLine: {
    borderTopWidth: 1,
    borderColor: 'whitesmoke',
  },
  rowContainer: {
    marginTop: 10,
    height: 44,
    width: width,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: { // 行标题
    flex: 1,
    marginLeft: 20,
  },
  type: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  reasonTextInput: { // 出差原因TextInput
    height: 40,
    width: 130,
    fontSize: 14,
  },
  // destination

  destinationTextInput: { // 拜访客户TextInput
    height: 40,
    width: 80,
    fontSize: 14,
  },
  addButtonContainer: { // 添加备用金申请
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
  submitContainer: { // 提交按钮
    width: width,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#1fd662',
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  // Total

  totalRow: {
    height: 44,
    width: width,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  currency: {
    color: '#1fd662',
    marginHorizontal: 5,
  },
  // TravelDetails

  travelRow: {
    marginTop: 10,
    paddingTop: 5,
    height: 100,
    width: width,
    backgroundColor: 'white',
  },
  travelTextInput: {
    height: 100,
    width: width,
    paddingHorizontal: 20,
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
    marginHorizontal: 20,
  },
});

module.exports = styles;