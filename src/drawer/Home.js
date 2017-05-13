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
      tabBarLabel: 'Trending',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-beer' : 'ios-beer-outline'}
          size={30}
          type='ionicon'
          color={tintColor}
        />
      ),
    },
  },
  SearchTab: {
    screen: SearchTab,
    path: '/search',
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'emoticon-cool' : 'emoticon-sad'}
          size={30}
          type='material-community'
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
          name={focused ? 'font' : 'font'}
          size={30}
          type='font-awesome'
          color={tintColor}
        />
      ),
    },
  },
}, {
    initialRouteName: 'ProfileTab',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
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
