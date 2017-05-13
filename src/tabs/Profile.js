import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import ProfileHome from '../views/profile_home'
import ProfileDetails from '../views/profile_details'

const ProfileTabView = ({ navigation }) => (
  <ProfileHome navigation={navigation} />
);

const ProfileDetailsTabView = ({ navigation }) => (
  <ProfileDetails navigation={navigation} />
);

const ProfileTab = StackNavigator({
  Profile: {
    screen: ProfileTabView,
    path: '/',
    navigationOptions: {
      title: 'Profile',
    },
  },
  ProfileDetails: {
    screen: ProfileDetailsTabView,
    path: '/profile_details',
    navigationOptions: {
      title: 'Profile Details',
    },
  },
});

export default ProfileTab;
