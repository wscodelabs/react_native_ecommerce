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
  Image,
  ToolbarAndroid,
  Dimensions,
  ScrollView
} from 'react-native';
import ProductItem from './src/components/products'
const products = [
  {
    image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwMjSiu59v8eqNC8W19lGeqynFVXeZEnLuV0qhJNdk3La_M-sp",
    name:"Product Name",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_tOcDek-6HPg7F0UgqbyTKt_nA678BJSx3Th_ow6nNRZdJXo8tne9-ay",
    name:"Product Name2",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name3",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name4",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name5",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name6",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name21",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name31",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name41",
    price:"$99"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA",
    name:"Product Name51",
    price:"$99"
  }
]

class HelloWorld1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarContainer}>
        <ToolbarAndroid
          style={styles.toolbar}
          logo={{uri:"https://www.drupal.org/files/project-images/Better_menu_logo.png"}}
          title="Activity"
          actions={[{title: 'Settings', icon:{uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKhwObLu7CivbrxCoCys2GCJGVzoejhEbWJRClc0_5TgWL-B5P"}, show: 'always'}]}
          onActionSelected={this.onActionSelected} />

        </View>
        <View style={styles.AdContainer}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          style={styles.scrollView}>
          <View style={styles.InsideScroll}>
            {this.listAllImages()}
          </View>
        </ScrollView>
        </View>
      </View>
    );
  }
  listAllImages(){
    return products.map((product)=>{
      return <ProductItem key={product.name} product={product} />
    })
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex:1
  },
  horizontalScrollView: {
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbarContainer: {
    flex:1,

  },
  toolbar: {
    flex:1,
    backgroundColor:"blue",
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"flex-start"
  },
  AdContainer: {
    flex:14,
    backgroundColor:'grey'
  },
  InsideScroll: {
    flexWrap:'wrap',
    flexDirection:'row'
  }
});

AppRegistry.registerComponent('HelloWorld1', () => HelloWorld1);
