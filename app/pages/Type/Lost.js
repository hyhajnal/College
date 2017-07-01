import React, { Component } from 'react';
import { Text, Image, ListView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Heading1, Heading2 } from '../../components/Text';
import { Color } from '../../utils/Theme';

const avator = require('../../img/a2.jpg');
const pic = require('../../img/pic.jpg');

class Lost extends Component {

  _renderItem(data) {
    return (
      <Grid style={data !== '3' ?
        { borderBottomWidth: 1, borderColor: '#eee', paddingVertical: 10 }
        : { paddingVertical: 10 }}
      >
        <Row>
          <Col size={2} style={{ marginRight: 5, overflow: 'hidden' }}>
            <Image
              source={pic}
              style={{ height: 90 }}
            />
          </Col>
          <Col style={{ justifyContent: 'space-between' }} size={3}>
            <Row style={{ alignItems: 'center' }}>
              <Image
                source={avator}
                style={{ width: 20, height: 20, borderRadius: 10 }}
              />
              <Heading2 style={{ marginHorizontal: 5 }}>不死鸟一辉{data}</Heading2>
            </Row>
            <Row>
              <Heading1 numberOfLines={1}>
                一张饭卡
              </Heading1>
            </Row>
            <Row style={{ alignItems: 'center' }}>
              <MaterialIcons name="location-on" size={16} />
              <Text>&nbsp;2天前</Text>
              <Text style={{ color: Color.green7, fontWeight: 'bold' }}>
                &nbsp;&nbsp;[捡到]</Text>
            </Row>
            <Row>
              <MaterialIcons name="location-on" size={16} />
              <Text>&nbsp;一区食堂餐厅第三排位子</Text>
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
    const dataSource = DS.cloneWithRows(['1', '2', '3']);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={data => this._renderItem(data)}
      />
    );
  }
}

export default Lost;

