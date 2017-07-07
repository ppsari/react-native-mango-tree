// import React, { Component } from 'react';
// import {
//   AppRegistry
// } from 'react-native';
import {TabNavigator} from 'react-navigation';

import  TreeScreen  from './TreeScreen'
import  PlayScreen  from './PlayScreen'
import  KOScreen  from './KOScreen'

const Content = TabNavigator({
  Play: {screen : PlayScreen},
  Tree: {screen : TreeScreen},
  KO: {screen : KOScreen},
})

export default Content