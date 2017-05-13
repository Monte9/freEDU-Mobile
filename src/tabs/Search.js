import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import SearchHome from '../views/search_home'
import SearchDetails from '../views/search_details'

const SearchTabView = ({ navigation }) => (
  <SearchHome navigation={navigation} />
);

const SearchDetailsTabView = ({ navigation }) => (
  <SearchDetails navigation={navigation} />
);

const SearchTab = StackNavigator({
  Search: {
    screen: SearchTabView,
    path: '/',
    navigationOptions: {
      title: 'Search',
    },
  },
  SearchDetails: {
    screen: SearchDetailsTabView,
    path: '/search_details',
    navigationOptions: {
      title: 'Search Details',
    },
  },
});

export default SearchTab;
