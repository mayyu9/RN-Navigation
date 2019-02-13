import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Button
          title="Go to settings.."
          onPress={()=>this.props.navigation.navigate('Settings')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Home;
