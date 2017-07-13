import React, { Component } from 'react';
import { StyleSheet, View, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Msg extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '消息',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-chatbubbles" size={25} color={tintColor} />
    ),
    headerRight: (
      <Icon.Button
        name="md-checkmark"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => {
          navigation.state.params.handleCheck();
        }}
      />
    )
  })

  render() {
    return (
      <View style={styles.container}>
        <WebView
          bounces={false}
          scalesPageToFit
          /* source={{ uri: 'http://www.hangge.com', method: 'GET' }} */
          source={require('./map.html')}
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

export default Msg;

