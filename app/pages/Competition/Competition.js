import React, { Component } from 'react';
import { StyleSheet, ListView, Image, Text, ScrollView, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { width, px2dp } from '../../utils/ToolUtil';
import Button from '../../components/Button';
import { Heading1, Heading2 } from '../../components/Text';

const pic1 = require('../../img/pic5.jpg');
const pic2 = require('../../img/pic6.jpg');
const pic3 = require('../../img/pic7.jpg');

class Competition extends Component {

  _renderItem(tag) {
    return (
      <Grid style={con}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row style={{ justifyContent: 'flex-start' }}>
            <Image
              source={pic2}
              style={{ width: 20, height: 20, borderRadius: 10 }}
            />
            <Heading2 style={{ marginHorizontal: 5 }}>不死鸟一辉</Heading2>
          </Row>
          <Row style={{ justifyContent: 'flex-end' }}>
            <Text style={styles.num}>3</Text>
            <Text style={styles.num}>/</Text>
            <Text style={styles.hot}>8</Text>
          </Row>
        </Row>
        <Row style={{ paddingVertical: 10 }}>
          <Col style={{ justifyContent: 'space-between' }} size={3}>
            <Row>
              <Heading1 numberOfLines={2}>
                基于云的数据分享平台
              </Heading1>
            </Row>
            <Heading2>{tag}</Heading2>
            <Row style={{ justifyContent: 'center' }}>
              <Button
                containerStyle={styles.add}
                style={styles.addText}
              >
                申请加入
              </Button>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    const DS = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    const dataSource = DS.cloneWithRows(['挑战杯', '新苗', '服务外包', '飞思卡尔']);
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
      >
        <Swiper
          height={px2dp(100)}
          autoplay
          autoplayTimeout={2}
          showsButtons={false}
        >
          <Image style={styles.img} source={pic1} />
          <Image style={styles.img} source={pic2} />
          <Image style={styles.img} source={pic3} />
        </Swiper>
        <View style={styles.iconMenu}>
          <TouchableHighlight
            onPress={() => this.props.navigate('FilterList')}
            style={styles.menuItem}
          >
            <View style={{ alignItems: 'center', flexDirection: 'column' }}>
              <Icon name="light-bulb" style={styles.icon} size={px2dp(20)} /><Text>项目组</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigate('FilterList')}
            style={styles.menuItem}
          >
            <View style={{ alignItems: 'center', flexDirection: 'column' }}>
              <Icon name="colours" style={styles.icon} size={px2dp(20)} /><Text>导师库</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigate('FilterList')}
            style={[styles.menuItem, { borderColor: 'transparent' }]}
          >
            <View style={{ alignItems: 'center', flexDirection: 'column' }}>
              <Icon name="flow-branch" style={styles.icon} size={px2dp(20)} /><Text>赛事</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={dataSource}
          style={{ marginVertical: 10 }}
          renderRow={data => this._renderItem(data)}
        />
      </ScrollView>
    );
  }
}

const con = {
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  padding: px2dp(10),
  marginVertical: px2dp(10),
  marginHorizontal: px2dp(20),
  overflow: 'hidden'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width,
    height: px2dp(100)
  },
  icon: {
    marginBottom: px2dp(5)
  },
  iconMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderColor: '#eee',
    paddingVertical: 5,
    borderBottomWidth: 1
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: px2dp(5),
    borderColor: '#eee',
    borderRightWidth: 2
  },
  add: {
    width: 70,
    padding: 5,
    marginTop: 10,
    borderRadius: 2,
    borderColor: 'green',
    borderWidth: 1
  },
  addText: {
    fontSize: 13,
    color: 'green'
  }
});

export default Competition;

