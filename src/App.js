/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import Store from "./store/ConfigureStore";

import AppNavigator from './AppNavigator';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

//type Props = {};
export default class App extends Component {
  constructor(props){
    super(props);
    // this.state={
    //   possibleFriends:[
    //     'Alice',
    //     'Gator',
    //     'Lizzie',
    //   ],
    //   currentFriends: [],
    // }
  }

  // addFriend = (index) => {
  //   const {possibleFriends, currentFriends}=this.state;
  //
  //   //pull friend out of possible friends.
  //   const addFriend = possibleFriends.splice(index,1);
  //
  //   //And put friend in currentFriend
  //   currentFriends.push(addFriend);
  //
  //   //finally update the satte
  //   this.setState({
  //     currentFriends,
  //     possibleFriends
  //     });
  // }

  render() {
    return (
      <Provider store={Store}>
      <AppNavigator
        // passing logic to other screens
        // screenProps={{
        //   currentFriends: this.state.currentFriends,
        //   possibleFriends: this.state.possibleFriends,
        //   addFriend: this.addFriend,
        //   }}
      />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "black"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
