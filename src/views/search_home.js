import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

class Search extends Component {
  render() {
    const { navigation } = this.props

    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type='material' />
          <Text style={styles.heading}>Search</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          backgroundColor='red'
          icon={{ name: "account", type: "material-community" }}
          onPress={() => navigation.navigate('SearchDetails')}
          title="Got to Search Detail View"
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

export default Search;
