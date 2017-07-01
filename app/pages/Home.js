import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {
  Club,
  Competition,
  Group,
  Lost,
  Market,
  Stragety
} from './Type';

import Wrap from './ItemWrap';
import Hr from '../components/Hr';

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar tabStyle={styles.tab} textStyle={styles.tabText} />
          )}
          tabBarBackgroundColor="#fcfcfc"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#3e9ce9"
          tabBarInactiveTextColor="#aaaaaa"
        >
          <View key={1} tabLabel="推荐" style={styles.base}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              horizontal={false}
              contentContainerStyle={styles.no_data}
              style={styles.base}
              refreshControl={
                <RefreshControl
                  style={styles.refreshControlBase}
                  refreshing={false}
                  title="Loading..."
                  colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
                />
              }
            >
              <Wrap icon="shield" title="社团"><Club /></Wrap>
              <Hr />
              <Wrap icon="slideshare" title="组团"><Group /></Wrap>
              <Hr />
              <Wrap icon="shop" title="二手市场" footer><Market /></Wrap>
              <Hr />
              <Wrap icon="bell" title="失物招领"><Lost /></Wrap>
              <Hr />
              <Wrap icon="light-bulb" title="比赛" footer more><Competition /></Wrap>
              <Hr />
              <Wrap icon="news" title="攻略"><Stragety /></Wrap>
              <Hr />
            </ScrollView>
          </View>
          <View key={2} tabLabel="比赛" style={styles.base}>
            <Text>hknk</Text>
          </View>
          <View key={3} tabLabel="公告" style={styles.base}>
            <Text>hknk</Text>
          </View>
          <View key={4} tabLabel="社团" style={styles.base}>
            <Text>hknk</Text>
          </View>
          <View key={5} tabLabel="二手" style={styles.base}>
            <Text>hknk</Text>
          </View>
          <View key={6} tabLabel="失物" style={styles.base}>
            <Text>hknk</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  tab: {
    paddingBottom: 0
  },
  tabText: {
    fontSize: 16
  },
  tabBarUnderline: {
    backgroundColor: '#3e9ce9',
    height: 2
  }
});

export default Home;
