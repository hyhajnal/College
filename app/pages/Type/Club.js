import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading1, Heading2 } from '../../components/Text';
import StarRating from '../../components/Star';
import Button from '../../components/Button';
import { px2dp } from '../../utils/ToolUtil';

const pic1 = require('../../img/pic5.jpg');
const pic2 = require('../../img/pic6.jpg');
const pic3 = require('../../img/pic7.jpg');
const pic4 = require('../../img/pic8.jpg');
const pic5 = require('../../img/pic9.jpg');
const pic6 = require('../../img/pic10.jpg');

class Club extends Component {
  _renderRight(pic) {
    return (
      <Image
        style={styles.img}
        source={pic}
      >
        <Heading1 style={styles.rtext}>99动漫社</Heading1>
        <Heading2 style={styles.rtext}>400人</Heading2>
        <StarRating
          maxStars={5}
          rating={5}
          disabled={false}
          starSize={15}
          style={{ width: 80 }}
          onStarChange={() => {}}
        />
      </Image>
    );
  }

  _renderLeft(pic) {
    return (
      <Image
        style={styles.img}
        source={pic}
      >
        <Button
          containerStyle={styles.btn}
          style={styles.btnText}
        >
          99动漫社
        </Button>
        <Heading1
          style={[styles.rtext, {
            position: 'absolute', bottom: px2dp(50) }]}
        >
          动漫社20周年演出
        </Heading1>
        <Text style={[styles.rtext, {
          position: 'absolute', bottom: px2dp(25) }]}
        >366人已参与</Text>
        <Text style={[styles.rtext, {
          position: 'absolute', bottom: px2dp(5) }]}
        >5月20日 18:30 大剧院</Text>
      </Image>
    );
  }

  _renderItem() {
    return (
      <Grid style={{ height: px2dp(200) }}>
        <Col style={{ marginRight: 10, overflow: 'hidden' }}>
          <Swiper
            autoplay
            autoplayTimeout={2}
            showsButtons={false}
          >
            {this._renderLeft(pic3)}
            {this._renderLeft(pic2)}
          </Swiper>
        </Col>
        <Col>
          <Row style={{ overflow: 'hidden', marginBottom: 10 }}>
            <Swiper
              autoplay
              autoplayTimeout={4}
              showsButtons={false}
              horizontal={false}
            >
              {this._renderRight(pic5)}
              {this._renderRight(pic6)}
            </Swiper>
          </Row>
          <Row style={{ overflow: 'hidden' }}>
            <Swiper
              autoplay
              autoplayTimeout={6}
              showsButtons={false}
              horizontal={false}
            >
              {this._renderRight(pic1)}
              {this._renderRight(pic4)}
            </Swiper>
          </Row>
        </Col>
      </Grid>
    );
  }
  render() {
    return (
      this._renderItem()
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: px2dp(200),
    height: px2dp(200),
    resizeMode: 'cover',
  },
  rtext: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5
  },
  btn: {
    width: px2dp(80),
    padding: 2,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    right: px2dp(20),
    top: px2dp(10)
  },
  btnText: {
    fontSize: px2dp(13),
    color: '#fff'
  },
});

export default Club;

