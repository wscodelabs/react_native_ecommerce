import React,{ Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ToolbarAndroid,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native'

import ProductItem from './products'
import NavBar from './NavBar'
const products = [
  {
    image:"http://www.gucci.com/images/ecommerce/styles_new/201503/web_doublehero/431665_CVL1G_6473_001_web_doublehero_new_theme.png",
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

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <NavBar onPressMenu={this.onPressMenu} onPressCart={this.onPressCart} navbarText="Activity"/>
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
      return <ProductItem key={product.name} product={product} onPressProduct={this._navigate.bind(this)}/>
    })
  }
  onPressMenu(){
    console.log("pressed");
  }
  onPressCart(){
    console.log("cart pressed");
  }
  _navigate(){
    this.props.navigator.push({
    name: 'productDetails',
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
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#42A5F5"
  },
  AdContainer: {
    flex:14,
    backgroundColor:'#F5F5F5'
  },
  InsideScroll: {
    flexWrap:"wrap",
    flexDirection:"row"
  },
  image: {
    flex:1,
    paddingTop:20,
    alignItems:"center",
    justifyContent:"center"
  },
  toolBarText:{
    flex:10,
    alignItems:"center"
  }
});
