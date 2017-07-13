import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { isIOS } from '../utils/ToolUtil';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
  }

  onChangeText() {
    // this.setState({ text })
    // this.props.onChangeText && this.props.onChangeText()
  }

  onSubmitEditing() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.text);
    }
  }

  click() {
    if (isIOS) {
      // console.log('搜索')
    } else {
      this.onSubmitEditing();
    }
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.inputContainer}>
          <Icon name="ios-search" size={25} />
          <TextInput
            style={styles.input}
            placeholder="搜索"
            returnKeyType="search"
            onSubmitEditing={this.onSubmitEditing}
            onChangeText={(text) => { this.onChangeText(text); }}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingLeft: 15
  },
  icon: {
    width: 21,
    height: 21
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default SearchBar;
