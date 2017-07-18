import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { Heading1, Heading2 } from '../components/Text';
import { Color } from '../utils/Theme';
import { width, height } from '../utils/ToolUtil';

const renderHeader = () => (
  <View style={styles.header}>
    <View style={styles.userContainer}>
      <Image style={styles.avatar} source={require('../img/pic2.png')} />
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Heading1 style={{ color: Color.darkText }}>一条咸鱼</Heading1>
        </View>
        <Text style={{ color: Color.darkText, marginTop: 4 }}>XX理工大学</Text>
      </View>
    </View>
  </View>
);


class Me extends Component {
  static navigationOptions = () => ({
    title: '我',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="emoji-happy" size={25} color={tintColor} />
    )
  })

  getDataList() {
    return (
    [
      [
          { title: '我的小组', subtitle: '4', icon: 'tripadvisor' },
          { title: '我的收藏', subtitle: '54', icon: 'attachment' },
          { title: '我的下载', subtitle: '63', icon: 'arrow-with-circle-down' },
          { title: '我的发布', subtitle: '2', icon: 'circle-with-plus' }
      ],
      [
          { title: '我的消息', subtitle: '4', icon: 'chat' },
          { title: '回复我的', subtitle: '8', icon: 'paper-plane' },
          { title: '收到的赞', subtitle: '4', icon: 'thumbs-up' },
          { title: '系统消息', subtitle: '2', icon: 'bell' },
      ],
      [
          { title: '主题切换', icon: 'palette' },
          { title: '设置', icon: 'tools' },
      ]
    ]);
  }

  detailCell(icon, title, subtitle, j) {
    return (
      <View style={styles.container} key={`${title}-${j}`}>
        <TouchableOpacity>
          <View style={styles.content}>
            <Heading2><Icon name={icon} size={18} /> &nbsp;&nbsp;{title}</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <Text style={{ color: '#999999' }}>{subtitle}</Text>
            <Icon name="chevron-thin-right" />
          </View>
          <View style={styles.spaceLine} />
        </TouchableOpacity>
      </View>
    );
  }

  renderCells() {
    const cells = [];
    const dataList = this.getDataList();
    for (let i = 0; i < dataList.length; i++) {
      const sublist = dataList[i];
      for (let j = 0; j < sublist.length; j++) {
        const data = sublist[j];
        const cell = this.detailCell(data.icon, data.title, data.subtitle, j);
        cells.push(cell);
      }
      cells.push(<View style={styles.spaceView} key={sublist[0].title} />);
    }

    return (
      <View style={{ flex: 1 }}>
        {cells}
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <View style={{ position: 'absolute', width, height: height / 2 }} />
        { renderHeader() }
        <View style={styles.spaceView} />
        {this.renderCells()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.mainColor,
    paddingBottom: 20,
    paddingTop: 40
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  },
  spaceView: {
    height: 14,
    backgroundColor: '#eee'
  },
  spaceLine: {
    height: 1,
    backgroundColor: '#eee'
  },
  container: {
    backgroundColor: 'white',
  },
  content: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  arrow: {
    width: 14,
    height: 14,
    marginLeft: 5,
  }
});

export default Me;

