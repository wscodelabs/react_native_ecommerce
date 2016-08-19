/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';
import Home from './src/components/Home'
import ProductDetails from './src/components/ProductDetails'

const routeComponents = {home:Home,productDetails:ProductDetails}

class HelloWorld1 extends Component {
  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      initialRoute={{ name: 'home' }}
      renderScene={ this.renderScene } />
    );
  }

  renderScene(route , navigator){
    let Component = routeComponents[route.name]
    console.log(Component);
    return <Component navigator={navigator}/>
  }
}



AppRegistry.registerComponent('HelloWorld1', () => HelloWorld1);
