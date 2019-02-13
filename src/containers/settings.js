import React from "react";
import {connect} from "react-redux";
import {View, Text, Button} from "react-native";
import {incrementfun, decrementfun} from "../actions/actions";

class Settings extends React.Component{
  render(){
    return(
      <View>
        <Text>pressed {this.props.counter} times!</Text>
        <Button
          title="INCREMENT"
          onPress={()=>this.props.increment()}
        />
        <Button
          title="DECREMENT"
          onPress={()=>this.props.decrement()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(incrementfun());
  },
  decrement: () => {
    dispatch(decrementfun());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
