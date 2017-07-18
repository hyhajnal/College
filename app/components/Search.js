import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { isIOS, px2dp } from '../utils/ToolUtil';

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
          <Icon name="ios-search" size={px2dp(20)} />
          <TextInput
            style={styles.input}
            placeholder="搜索我的校园"
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
    height: px2dp(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1,
    height: px2dp(32),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: px2dp(30),
    paddingLeft: px2dp(15)
  },
  input: {
    flex: 1,
    marginHorizontal: px2dp(5),
    fontSize: px2dp(16)
  },
});

export default SearchBar;
