import _ from 'lodash';
import moment from 'moment';

module.exports = {
  // 获取当前日期并格式化 yyyy-mm-dd
  getNowFormatDate() {
    return moment().format('YYYY-MM-DD');
  },

  // 获取日期：年-月-日
  createDateData() {
    const date = {};
    _.range(2015, 2018).map(year => {
      const yearKey = `${year}`;
      date[yearKey] = {};

      _.range(12).map(month => {
        const mon = `0${month + 1}`.substr(-2);
        const monthKey = `${mon}`;
        date[yearKey][monthKey] = [];
        date[yearKey][monthKey] = _.range(moment(`${year}-${mon}`).daysInMonth()).map((day, i) => {
          return date[yearKey][monthKey][i] = `${`0${day + 1}`.substr(-2)}`;
        });
      });
    });
    return date;
  },

  // 获取小时数组
  createHoursArray() {
    return _.range(24).map(item => `${moment().hours(item).format('HH')}`);
  },

  // 获取分钟数组
  createMinutesArray() {
    return _.range(60).map(item => `${moment().minutes(item).format('mm')}`);
  },

  // 得到年份 yyyy
  getYear() {
    return moment().year();
  },

  // 得到月份 mm
  getMonth() {
    // return moment().month(moment().month()).format('MM');
    return moment().format('MM');
  },

  // 得到月份 m
  getOriginMonth() {
    return moment().add(1, 'M').month();
  },

  // 得到日期 dd
  getDay() {
    return moment().format('DD');
  },

  // 得到小时
  getHours() {
    return `${moment().hours(moment().hour()).format('HH')}`;
  },

  // 得到分钟
  getMinutes() {
    return `${moment().minutes(moment().minute()).format('mm')}`;
  },

  // 获取今年某个月的天数
  getDaysAccountForMonth(month) {
    return moment(moment().month(month).format('YYYY-MM'), 'YYYY-MM').daysInMonth();
  },

  // 截取字符中不包含最后一位的数据
  getSubInfo(str, sLength) {
    return str.substring(0, sLength);
  },

};