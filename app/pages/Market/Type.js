import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { width, px2dp } from '../../utils/ToolUtil';
import { Heading2 } from '../../components/Text';

const pic1 = require('../../img/pic11.jpg');
const pic2 = require('../../img/pic6.jpg');
const pic3 = require('../../img/pic10.jpg');
const pic4 = require('../../img/pic7.jpg');
const pic5 = require('../../img/pic9.jpg');
const pic6 = require('../../img/pic8.jpg');

class Type extends Component {

  _renderTop(title, pic) {
    return (
      <Image source={pic} style={styles.topImage}>
        <Heading2 style={styles.title}>{title}</Heading2>
      </Image>
    );
  }

  _renderBottom(pic) {
    return (
      <View style={styles.bottomItem}>
        <Image source={pic} style={styles.bottomImage} />
        <Heading2 style={{ textAlign: 'center' }}>手工地毯</Heading2>
        <Heading2 style={{ textAlign: 'center', color: 'red' }}>¥45</Heading2>
      </View>
    );
  }

  _renderItem(title, p1, p2) {
    return (
      <View style={styles.goods}>
        {this._renderTop(title, p1)}
        <View style={styles.bottomWrap}>
          {this._renderBottom(p2)}
          {this._renderBottom(p2)}
          {this._renderBottom(p2)}
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: '#eee' }}
        automaticallyAdjustContentInsets={false}
      >
        {this._renderItem('图书教材', pic1, pic2)}
        {this._renderItem('出行必备', pic3, pic4)}
        {this._renderItem('寝室神器', pic5, pic6)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  goods: {
    marginBottom: px2dp(15),
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width,
    height: px2dp(100),
    textAlign: 'center',
    lineHeight: px2dp(100),
    color: '#fff',
    fontSize: px2dp(24)
  },
  topImage: {
    width,
    height: px2dp(100),
    resizeMode: 'cover',
    // tintColor: '#000',
    // opacity: 0.5
  },
  bottomWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: px2dp(10),
  },
  bottomImage: {
    width: px2dp(110),
    height: px2dp(80),
    resizeMode: 'cover'
  },
  bottomItem: {
    width: px2dp(110),
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee'
  }
});

export default Type;

