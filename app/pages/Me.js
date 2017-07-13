import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Me extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '我',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-bonfire" size={25} color={tintColor} />
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
        {/* <Map amapkey={'ef8ce426c07865dda6f848765680a9b8'} /> */}
        <Text>me</Text>
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

export default Me;

