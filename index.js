/**
 * @format
 */

import 'react-native-get-random-values';
import React from 'react';
import { AppRegistry } from 'react-native';
import { AppWrapper } from './app/AppWrapper';
import { name as appName } from './app.json';
import { SYNC_CONFIG } from './sync.config';

const App = () => (
  <AppWrapper />
);

AppRegistry.registerComponent(appName, () => App);
