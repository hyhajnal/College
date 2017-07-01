import React, { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading1, Heading2 } from '../../components/Text';
import Button from '../../components/Button';

const pic = require('../../img/pic.jpg');

class Competition extends Component {

  _renderCard(tag) {
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
          <Col style={{ justifyContent: 'space-around' }} size={3}>
            <Row>
              <Heading1 numberOfLines={2}>
                基于云的分享平台
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

  _renderItem(color) {
    return (
      <Grid>
        <Row style={{ justifyContent: 'center', backgroundColor: color, padding: 5 }}>
          <Heading2 style={{ color: '#fff' }} numberOfLines={2}>
            挑战杯
          </Heading2>
        </Row>
        <Row
          style={{ padding: 5,
            justifyContent: 'space-between',
            alignItems: 'center' }}
        >
          <Text style={{ color: '#fff' }}>
            2017届
          </Text>
          <Text style={{ color: '#fff', fontSize: 25 }}>
            <MaterialIcons name="whatshot" />
            75
          </Text>
        </Row>
      </Grid>
    );
  }
  render() {
    return (
      <Grid>
        <Col style={{ marginRight: 10 }}>
          {this._renderCard('挑战杯')}
        </Col>
        <Col>
          <Row style={{ marginBottom: 10, backgroundColor: '#f46e65' }}>
            {this._renderItem('#f04134')}
          </Row>
          <Row style={{ marginBottom: 10, backgroundColor: '#ffce3d' }}>
            {this._renderItem('#ffbf00')}
          </Row>
          <Row style={{ backgroundColor: '#7ec2f3' }}>
            {this._renderItem('#49a9ee')}
          </Row>
        </Col>
      </Grid>
    );
  }
}

const con = {
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  overflow: 'hidden',
  marginHorizontal: 5
};

const styles = StyleSheet.create({
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

export default Competition;

