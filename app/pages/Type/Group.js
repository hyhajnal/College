import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading1 } from '../../components/Text';
import { width } from '../../utils/ToolUtil';
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
        <Row style={{ padding: 10 }}>
          <Col style={{ justifyContent: 'space-between' }} size={3}>
            <Row>
              <Heading1 numberOfLines={2}>
                如何开发票如何开发
              </Heading1>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Text>5/3</Text>
              <Text>73</Text>
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
  width: width * 0.4,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  marginHorizontal: 10,
  overflow: 'hidden'
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  btn: {
    width: 80,
    padding: 2,
    marginTop: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'green',
  },
  btnText: {
    fontSize: 13,
    color: '#fff'
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

export default Group;

