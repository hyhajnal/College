import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { width, height, px2dp, isIOS } from '../../utils/ToolUtil';
import { Color } from '../../utils/Theme';

const _Canlender = () =>
(
  <Text style={styles.dateWrap}>
    这是你在理工的第<Text style={styles.date}>&nbsp;478&nbsp;</Text>天
  </Text>
);

const w = width / 3;
const h = w * 0.6 + 20;


const menuData = [
  { icon: 'news', title: '简介', routeName: 'Map' },
  { icon: 'location-pin', title: '地图', routeName: 'Map' },
  { icon: 'flow-branch', title: '攻略', routeName: 'Map' },
  { icon: 'light-bulb', title: '教师', routeName: 'Map' },
  { icon: 'help', title: '问答', routeName: 'Map' },
  { icon: 'book', title: '课程', routeName: 'Map' },
];

const renderSwipeView = navigate =>
(<View style={styles.typesView}>
  {
    menuData.map(({ icon, title, routeName }) => {
      const render = (
        <View style={[{ width: w, height: h }, styles.typesItem]}>
          <Icon name={icon} size={30} style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 12, color: '#666' }}>{title}</Text>
        </View>
      );
      return (
        isIOS ? (
          <TouchableHighlight
            style={{ width: w, height: h }}
            key={title}
            onPress={() => navigate(routeName)}
          >
            {render}
          </TouchableHighlight>
        ) : (
          <TouchableNativeFeedback
            style={{ width: w, height: h }}
            key={title}
            onPress={() => navigate(routeName)}
          >
            {render}
          </TouchableNativeFeedback>
        )
      );
    })
  }
</View>);

const Campus = ({ navigate }) => (
  <View style={styles.container}>
    {_Canlender()}
    {renderSwipeView(navigate)}
  </View>
);


const styles = StyleSheet.create({
  container: {
    height: height - 160,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  dateWrap: {
    width,
    lineHeight: px2dp(200),
    textAlign: 'center',
    fontSize: px2dp(18)
  },
  date: {
    fontSize: px2dp(30),
    color: Color.mainText,
    marginHorizontal: px2dp(20)
  },
  typesView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typesItem: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee'
  }
});

export default Campus;

