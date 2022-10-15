/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Component 01

import Hello from './component01/hello';
import {Thongtin} from './component01/hello';
import Img from './component01/img';
import btn from './component01/btn';

AppRegistry.registerComponent(appName, () => btn);
