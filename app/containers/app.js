
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from '../pages/Splash';
import CategoryContainer from '../containers/CategoryContainer';
import MainContainer from '../containers/MainContainer';
import WebViewPage from '../pages/WebViewPage';
// import Feedback from '../pages/Feedback';
// import About from '../pages/About';
import FilterList from './FilterList';
import Map from '../pages/Map/Map';
import Explore from '../pages/Explore';
import Me from '../pages/Me';
import Msg from '../pages/Msg';
import { Color } from '../utils/Theme';

const TabContainer = TabNavigator(
  {
    Main: { screen: MainContainer },
    Explore: { screen: Explore },
    Msg: { screen: Msg },
    Me: { screen: Me }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: `${Color.mainColor}`,
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: `${Color.dark}`
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Category: {
      screen: CategoryContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Web: { screen: WebViewPage },
    Map: { screen: Map },
    FilterList: { screen: FilterList }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: `${Color.mainColor}`
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
);

export default App;
