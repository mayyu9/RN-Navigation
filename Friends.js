import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Friends extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Add friends here</Text>
        {
          this.props.screenProps.possibleFriends.map((friend, index) => (
            <View>
            <Button
              key={friend}
              title = {`Add ${friend}`}
              style= {styles.button}
              onPress = {()=>this.props.screenProps.addFriend(index)}
              />
              </View>
          ))
        }
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
  }
});

export default Friends;
