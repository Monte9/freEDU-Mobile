import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import AboutView from '../views/about'

const About = StackNavigator({
  About: {
    screen: AboutView,
    navigationOptions: {
      title: 'About',
    },
  },
});

About.navigationOptions = {
  drawerLabel: 'About',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
      size={30}
      style={{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}
      type='material'
      color={tintColor}
    />
  ),
};

export default About;
