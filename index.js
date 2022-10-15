/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Btn from './component01/btn';

import Hello from './component01/hello';

// import {Thongtin} from'./component01/hello';

// import Imgs from'./component01/img';

AppRegistry.registerComponent(appName, () => Btn);
