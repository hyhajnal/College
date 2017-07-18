import React, { Component } from 'react';
import { StyleSheet, View, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MapFrgment from './map.html';

class Map extends Component {
  static navigationOptions = () => ({
    title: '地图',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} color={tintColor} />
    ),
    headerRight: (
      <Icon.Button
        name="md-share"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <WebView
          bounces={false}
          scalesPageToFit
          /* source={{ uri: 'http://www.hangge.com', method: 'GET' }} */
          source={MapFrgment}
          style={{ width: 400, height: 800 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Map;

