import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading1 } from '../../components/Text';
import { width, px2dp } from '../../utils/ToolUtil';
import Button from '../../components/Button';

const pic = require('../../img/pic.jpg');

class Group extends Component {

  _renderItem(tag) {
    return (
      <Grid style={con}>
        <Row style={{ justifyContent: 'center' }}>
          <Image
            source={pic}
            style={styles.img}
          />
        </Row>
        <Button
          containerStyle={styles.btn}
          style={styles.btnText}
        >
          {tag}
        </Button>
        <Row style={{ padding: px2dp(10) }}>
          <Col style={{ justifyContent: 'space-between' }} size={3}>
            <Row>
              <Heading1 numberOfLines={2}>
                如何开发票如何开发
              </Heading1>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Text style={{ paddingVertical: px2dp(4) }}>5&nbsp;/&nbsp;9</Text>
            </Row>
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
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal
        contentContainerStyle={styles.no_data}
        style={styles.base}
      >
        {this._renderItem('英语晨读')}
        {this._renderItem('比赛')}
        {this._renderItem('实验室')}
        {this._renderItem('约跑')}
        {this._renderItem('合租')}
      </ScrollView>
    );
  }
}

const con = {
  width: width * 0.5,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  marginHorizontal: px2dp(10),
  overflow: 'hidden'
};

const styles = StyleSheet.create({
  icon: {
    width: px2dp(32),
    height: px2dp(32),
  },
  img: {
    height: px2dp(80),
    width: px2dp(80),
    borderRadius: px2dp(40),
    marginTop: px2dp(10),
    backgroundColor: 'transparent'
  },
  btn: {
    width: px2dp(80),
    padding: 2,
    marginTop: px2dp(10),
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'green',
  },
  btnText: {
    fontSize: px2dp(13),
    color: '#fff'
  },
  add: {
    width: px2dp(80),
    padding: px2dp(5),
    borderRadius: 2,
    borderColor: 'green',
    borderWidth: 1
  },
  addText: {
    fontSize: 13,
    color: 'green'
  }
});

export default Group;

