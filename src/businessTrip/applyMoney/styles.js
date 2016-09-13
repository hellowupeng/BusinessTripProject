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
  // Bar

  bar: {
    width: width,
    height: 30,
    // backgroundColor: 'gainsboro',
    backgroundColor: 'green',
    justifyContent: 'center',
    padding: 20,
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
    margin: 20,
    fontSize: 14,
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'whitesmoke',
  },
  // Sum

  currency: {
    color: '#1fd662',
    marginHorizontal: 5,
  }
});

module.exports = styles;