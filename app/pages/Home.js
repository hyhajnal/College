import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Color } from '../utils/Theme';
import { px2dp } from '../utils/ToolUtil';
import {
  Club,
  Competition,
  Group,
  Lost,
  Market,
  Stragety
} from './Type';

import CompetitionPage from './Competition/Competition';
import CampusPage from './Campus/Campus';
import GroupPage from './Group/Group';
import MarketPage from './Market/Market';
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
          tabBarBackgroundColor="#fff"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor={Color.mainText}
          tabsContainerStyle={{ height: 10 }}
          tabBarInactiveTextColor="#555"
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
            <CompetitionPage navigate={this.props.navigate} />
          </View>
          <View key={3} tabLabel="校园" style={styles.base}>
            <CampusPage navigate={this.props.navigate} />
          </View>
          <View key={4} tabLabel="小组" style={styles.base}>
            <GroupPage navigate={this.props.navigate} />
          </View>
          <View key={5} tabLabel="集市" style={styles.base}>
            <MarketPage />
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
    height: 10
  },
  tabText: {
    fontSize: px2dp(14)
  },
  tabBarUnderline: {
    backgroundColor: Color.mainText,
    height: 2
  }
});

export default Home;
