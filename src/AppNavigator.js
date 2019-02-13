import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import Settings from './containers/settings';


//A StackNavigator works exactly like a call stack or a stack of dishes.
//Each screen we navigate to is pushed to the top of the stack, and each time we hit the back button, this screen pops off the top of the stack.
const AppNavigator = createStackNavigator({
  Home: {screen: Home,
    navigationOptions:{
      header: null, //null will hide the header
    }
  },
  Settings: {screen: Settings}
});

export default createAppContainer(AppNavigator);
