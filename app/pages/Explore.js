import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Explore extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '发现',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-ionic" size={25} color={tintColor} />
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
        <Text>发现</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Explore;

