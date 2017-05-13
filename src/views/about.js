import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

class AboutView extends Component {
  render() {
    const { navigation } = this.props

    return (
      <View>
        <Text style={styles.text}>
          I recently stumbled upon Apollo at Expo: GraphQL Helps Small Teams Move Fast - Adam Miskiewicz talk and was intrigued by GraphQL & Apollo client.
        </Text>
        <Text style={styles.text}>
          So I decided to learn both of those technologies through building a social app using react native with a full-fledged, production ready backend.
        </Text>
        <Text style={styles.text}>
          Recently my friend Michael Leung (@MiLeung) created freEdu.tech which is a website for Free Tech Education. Find the source code here: https://github.com/MiLeung/freEDU.tech
        </Text>
        <Text style={styles.text}>
          Taking inspiration from the website, I decided to created the corresponding mobile app for it. This seemed like the perfect use case for my learning experiment so I decided to see how far I could take it.
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});

export default AboutView;
