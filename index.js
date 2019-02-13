/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {provider} from "react-redux";
import App from "./src/App";
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
