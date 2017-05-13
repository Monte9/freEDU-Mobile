import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import TrendingHome from '../views/trending_home'
import TrendingDetails from '../views/trending_details'

const TrendingTabView = ({ navigation }) => (
  <TrendingHome navigation={navigation} />
);

const TrendingDetailsTabView = ({ navigation }) => (
  <TrendingDetails navigation={navigation} />
);

const TrendingTab = StackNavigator({
  Trending: {
    screen: TrendingTabView,
    path: '/',
    navigationOptions: {
      title: 'Trending',
    },
  },
  TrendingDetails: {
    screen: TrendingDetailsTabView,
    path: '/trending_details',
    navigationOptions: {
      title: 'Trending Detail',
    },
  },
});

export default TrendingTab;
