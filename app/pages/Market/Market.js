import React, { Component } from 'react';
import { StyleSheet, Image, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { width } from '../../utils/ToolUtil';
import Button from '../../components/Button';
import { Heading2 } from '../../components/Text';
import Type from './Type';
import data from './good_mock';

const goods = data.goods;
let i = 0;

class Market extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leftColumn: [],
      rightColumn: [],
      lHeight: 0,
      rHeight: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.leftColumn.length !== nextState.leftColumn.length
    || this.state.rightColumn.length !== nextState.rightColumn.length;
  }

  getLH(e) {
    this.pushGoods({ l: e.layout.height });
  }

  getRH(e) {
    this.pushGoods({ r: e.layout.height });
  }

  pushGoods({ l, r }) {
    const item = goods[i];
    const lh = !l ? this.state.lHeight : l;
    const rh = !r ? this.state.rHeight : r;
    const distance = lh - rh;
    if (i >= goods.length || i !== 0 && distance === 0) return;
    if (distance >= 0) {
      this.setState({
        rHeight: rh,
        lHeight: lh,
        rightColumn: this.state.rightColumn.concat(item)
      });
    } else if (distance < 0) {
      this.setState({
        rHeight: rh,
        lHeight: lh,
        leftColumn: this.state.leftColumn.concat(item)
      });
    }
    i += 1;
  }

  _renderItem(good, idx) {
  // const icon = `../../img/${good.img}`);
    return (
      <View style={styles.goods} key={idx}>
        <View>
          <Image
            source={{ uri: good.img }}
            // source={require('../../img/pic1.jpg')}
            style={styles.img}
          >
            <Button
              containerStyle={styles.goodsTag}
              style={{ fontSize: 12, color: '#fff' }}
            >{good.tag}</Button>
          </Image>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <Heading2>{good.title}</Heading2>
          <Text style={{ color: '#555' }}>{good.desc}</Text>
        </View>
        <View style={styles.goodsBottom}>
          <Heading2 style={{ color: 'red' }}>¥ {good.price}</Heading2>
          <Text style={{ fontSize: 12 }}>{good.like}&nbsp;
            <Icon name="heart-outlined" />
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
      >
        <Type />
        <View style={{ flexDirection: 'row', width, alignItems: 'flex-start', padding: 10 }}>
          <View style={{ flex: 1 }} onLayout={({ nativeEvent: e }) => this.getLH(e)}>
            {this.state.leftColumn.length > 0 &&
              this.state.leftColumn.map((good, idx) =>
                this._renderItem(good, idx)
              )
            }
          </View>
          <View style={{ flex: 1 }} onLayout={({ nativeEvent: e }) => this.getRH(e)}>
            {this.state.rightColumn.length !== 0 &&
              this.state.rightColumn.map((good, idx) =>
                this._renderItem(good, idx)
              )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#eee',
    borderRightWidth: 2
  },
  goods: {
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  goodsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 5
  },
  goodsTag: {
    position: 'absolute',
    top: 5,
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#f9bd49'
  },
  img: {
    height: 90,
    width: undefined,
    resizeMode: 'cover'
  }
});

export default Market;

