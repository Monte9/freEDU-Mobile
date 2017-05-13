import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

class Profile extends Component {
  render() {
    const { navigation } = this.props

    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type='material' />
          <Text style={styles.heading}>Profile</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          backgroundColor='red'
          icon={{ name: "account", type: "material-community" }}
          onPress={() => navigation.navigate('ProfileDetails')}
          title="Got to Profile Detail View"
        />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: 'grey'
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center",
    color: 'blue'
  },
});

export default Profile;
