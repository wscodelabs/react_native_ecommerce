/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import ProductItem from './src/components/products'
const products = [
  {
    image:"https://www.amazon.in/s/ref=s9_acss_bw_cg_shmh12Au_1a1?rh=i%3Ashoes%2Cn%3A1571283031%2Cn%3A%211571284031%2Cn%3A1983396031%2Cp_n_pct-off-with-tax%3A2665400031%2Cp_98%3A10440597031%2Cn%3A1983518031&bbn=1983396031&ie=UTF8&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-2&pf_rd_r=006942WCCPER8QR4PCEX&pf_rd_t=101&pf_rd_p=1047525667&pf_rd_i=1983518031",
    name:"Product Name",
    price:"$99"
  }
]

class HelloWorld1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text>
            Here goes the toolbar
          </Text>
        </View>
        <View style={styles.AdContainer}>
          {this.listAllImages()}
        </View>
      </View>
    );
  }
  listAllImages(){
    console.log(products);
    return products.map((product)=>{
      return <ProductItem key={product.name} product={product} />
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    flex:1,
    backgroundColor: 'blue'
  },
  AdContainer: {
    flex:9,
    flexDirection:'row',
    //backgroundColor:'red'
  },
});

AppRegistry.registerComponent('HelloWorld1', () => HelloWorld1);
