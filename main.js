import Expo from 'expo';
import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './src/drawer/Home'
import About from './src/drawer/About'

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Text style={styles.titleText}>
        freEdu
      </Text>
      <Text style={styles.subtitleText}>
        Free Tech Education
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainRoot = DrawerNavigator({
  Home: {
    path: '/home',
    screen: Home
  },
  About: {
    path: '/about',
    screen: About,
  }
},
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      }
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent
  }
);

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 27,
    paddingBottom: 10,
  },
  subtitleText: {
    color: '#548ff7',
    fontSize: 20,
  }
});

Expo.registerRootComponent(MainRoot);
