import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row, Grid } from 'react-native-easy-grid';
import FeedList from './Explore/FeedList';
import Button from '../components/Button';
import { width } from '../utils/ToolUtil';
import { Heading2 } from '../components/Text';

const pic = require('../img/pic.jpg');

class Explore extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '动态',
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

  _renderItem(tag) {
    return (
      <Grid style={con}>
        <Row style={{ justifyContent: 'center' }}>
          <Image
            source={pic}
            style={styles.img}
          />
        </Row>
        <Heading2 numberOfLines={1} style={{ textAlign: 'center' }}>
          {tag}
        </Heading2>
      </Grid>
    );
  }

  _renderHotUser() {
    return (<ScrollView
      automaticallyAdjustContentInsets={false}
      horizontal
      contentContainerStyle={styles.hotlist}
      style={styles.base}
    >
      {this._renderItem('楚乔')}
      {this._renderItem('宇文怀')}
      {this._renderItem('宇文玥')}
      {this._renderItem('燕洵')}
      {this._renderItem('淳儿')}
    </ScrollView>);
  }

  _renderHotTopic() {
    return (<ScrollView
      automaticallyAdjustContentInsets={false}
      horizontal
      contentContainerStyle={styles.hotlist}
      style={styles.base}
    >
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
      <Button containerStyle={styles.add} style={styles.addText}>#食堂#</Button>
    </ScrollView>);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          {this._renderHotUser()}
          {this._renderHotTopic()}
          <FeedList />
        </ScrollView>
      </View>
    );
  }
}

const con = {
  width: width * 0.2,
  borderRadius: 5,
  marginHorizontal: 5,
  overflow: 'hidden'
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  icon: {
    width: 32,
    height: 32,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 5,
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: 'transparent'
  },
  add: {
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 2
  },
  addText: {
    fontSize: 13,
    color: '#555'
  },
  hotlist: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: '#eee',
    borderBottomWidth: 1
  }
});

export default Explore;

