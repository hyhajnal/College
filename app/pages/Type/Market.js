import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading2 } from '../../components/Text';

const s1 = require('../../img/s1.jpeg');
const s2 = require('../../img/s2.jpeg');
const s3 = require('../../img/s3.jpeg');

class Market extends Component {

  _renderItem(pic) {
    return (
      <Grid style={{ overflow: 'hidden', margin: 10 }}>
        <Row>
          <Image
            source={pic}
            style={styles.img}
          />
        </Row>
        <Row>
          <Heading2>行李箱9成新</Heading2>
        </Row>
        <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Heading2 style={{ color: 'red' }}>¥ 15</Heading2>
          <Text style={{ fontSize: 12 }}>30人<Text>感兴趣</Text></Text>
        </Row>
      </Grid>
    );
  }
  render() {
    return (
      <View>
        <Row>
          <Col>{this._renderItem(s1)}</Col>
          <Col>{this._renderItem(s2)}</Col>
          <Col>{this._renderItem(s3)}</Col>
        </Row>
        <Row>
          <Col>{this._renderItem(s1)}</Col>
          <Col>{this._renderItem(s2)}</Col>
          <Col>{this._renderItem(s3)}</Col>
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 90,
    flex: 1,
    resizeMode: 'cover'
  }
});

export default Market;

