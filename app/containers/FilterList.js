
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Color } from '../utils/Theme';
import { px2dp } from '../utils/ToolUtil';

class FilterList extends React.Component {
  static navigationOptions = {
    header: null
  };

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
          <View key={1} tabLabel="项目" style={styles.base}>
            <Text>项目</Text>
          </View>
          <View key={2} tabLabel="导师" style={styles.base}>
            <Text>导师</Text>
          </View>
          <View key={3} tabLabel="比赛" style={styles.base}>
            <Text>比赛</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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

export default FilterList;
