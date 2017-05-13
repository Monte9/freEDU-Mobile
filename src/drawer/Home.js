import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TrendingTab from '../tabs/Trending'
import SearchTab from '../tabs/Search'
import ProfileTab from '../tabs/Profile'

const Home = TabNavigator({
  TrendingTab: {
    screen: TrendingTab,
    path: '/trending',
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name='fire'
          size={30}
          type='simple-line-icon'
          color={tintColor}
        />
      ),
    },
  },
  SearchTab: {
    screen: SearchTab,
    path: '/search',
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name='search'
          size={30}
          type='octicon'
          color={tintColor}
        />
      ),
    },
  },
  ProfileTab: {
    screen: ProfileTab,
    path: '/profile',
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name='user'
          size={30}
          type='simple-line-icon'
          color={tintColor}
        />
      ),
    },
  },
}, {
    initialRouteName: 'TrendingTab',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showLabel: false,
    },
  });

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}
      type='material-commnity'
      color={tintColor}
    />
  ),
};

export default Home;
