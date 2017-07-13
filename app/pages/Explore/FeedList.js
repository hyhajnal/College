import React from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  RefreshControl
} from 'react-native';

import FeedCell from './FeedCell';
import { width } from '../../utils/ToolUtil';

const FeedList = React.createClass({

  getInitialState() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      page: 1,
      feedId: 0,
      feeds: [],
      noMore: false,
      loaded: false,
      isRefreshing: false,
      isLoadingMore: false,
    };
  },

  render() {
    const DS = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    const dataSource = DS.cloneWithRows(['1', '2', '3']);
    return (
      <View>
        <ListView
          isComment={this.state.isComment}
          dataSource={dataSource}
          renderRow={data => this.renderFeed(data)}
          onEndReachedThreshold={0}
          style={styles.listView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              tintColor="#F3F3F3"
              title="刷新中..."
              titleColor="#9B9B9B"
              colors={['#F3F3F3', '#F3F3F3', '#F3F3F3']}
              progressBackgroundColor="#F3F3F3"
            />
          }
        />
      </View>
    );
  },
  renderFooter() {
    let footer;
    if (this.state.isLoadingMore) {
      footer = (
        <View style={styles.footer}>
          <Text>正在加载...</Text>
        </View>

      );
    } else if (this.state.noMore) {
      footer = (
        <View style={styles.footer}>
          <Text style={{ color: '#adadad' }}>没有更多了</Text>
        </View>
      );
    }
    return footer;
  },

  renderFeed(data) {
    return (
      <FeedCell key={data} />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  listView: {
    // marginTop: 65,
    backgroundColor: 'white',
  },
  footer: {
    width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default FeedList;
