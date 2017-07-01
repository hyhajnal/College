import React, { Component } from 'react';
import { Text, Image, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading1, Heading2 } from '../../components/Text';

const avator = require('../../img/a2.jpg');
const pic = require('../../img/pic.jpg');

class Stragety extends Component {

  _renderItem(data) {
    return (
      <Grid style={data !== '3' ?
        { borderBottomWidth: 1, borderColor: '#eee', paddingVertical: 10 }
        : { paddingVertical: 10 }}
      >
        <Row style={{ alignItems: 'center' }}>
          <Image
            source={avator}
            style={{ width: 20, height: 20, borderRadius: 10 }}
          />
          <Heading2 style={{ marginHorizontal: 5 }}>不死鸟一辉{data}</Heading2>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col style={{ justifyContent: 'space-between' }} size={3}>
            <Row>
              <Heading1 numberOfLines={2}>
                如何开发票如何开发票如何开发票如何开发票何开发票发票何开发票
              </Heading1>
            </Row>
            <Row style={{ alignItems: 'flex-end' }}>
              <Icon name="eye" size={16} />
              <Text>&nbsp;2.7k</Text>
              <Icon name="message" size={16} style={{ marginLeft: 10 }} />
              <Text>&nbsp;54</Text>
              <Icon name="heart" size={16} style={{ marginLeft: 10 }} />
              <Text>&nbsp;73</Text>
            </Row>
          </Col>
          <Col size={2} style={{ marginLeft: 5, overflow: 'hidden' }}>
            <Image
              source={pic}
              style={{ height: 90 }}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
  render() {
    const DS = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    const dataSource = DS.cloneWithRows(['1', '2', '3']);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={data => this._renderItem(data)}
      />
    );
  }
}


export default Stragety;

