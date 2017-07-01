import React, { Component } from 'react'
import {
  View, Text, TouchableHighlight,
  TouchableNativeFeedback, StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Entypo'
import { isIOS, width } from '../../Util/tool'

const routes = ['Group', 'Market', 'Club', 'Lost', 'NoticeBoard', 'Competition', 'Stragety']

class Grid extends Component {

  render() {
    const { navigate } = this.props
    const w = width / 4
    const h = w * 0.6 + 20
    const icons = ['slideshare', 'shop', 'shield', 'bell', 'megaphone', 'light-bulb', 'news', 'plus']
    const renderSwipeView = types =>
    (<View style={styles.typesView}>
      {
        types.map((item, i) => {
          const render = (
            <View style={[{ width: w, height: h }, styles.typesItem]}>
              <Icon name={icons[i]} size={25} style={{ marginBottom: 10 }} />
              <Text style={{ fontSize: 12, color: '#666' }}>{item}</Text>
            </View>
          )
          return (
            isIOS ? (
              <TouchableHighlight
                style={{ width: w, height: h }}
                key={item}
                onPress={() => navigate(routes[i])}
              >
                {render}
              </TouchableHighlight>
            ) : (
              <TouchableNativeFeedback
                style={{ width: w, height: h }}
                key={item}
                onPress={() => navigate(routes[i])}
              >
                {render}
              </TouchableNativeFeedback>
            )
          )
        })
      }
    </View>)

    return (
      <Swiper height={h * 2}>
        {renderSwipeView(['组团', '二手市场', '社团', '失物招领', '校园公告', '比赛', '攻略', '更多'], 0)}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  typesView: {
    paddingBottom: 10,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typesItem: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Grid
