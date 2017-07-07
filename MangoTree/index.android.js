/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  // Text,
  // View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/index'
import {Content} from './src/components'

export default class MangoTree extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <Content/>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('MangoTree', () => MangoTree);
