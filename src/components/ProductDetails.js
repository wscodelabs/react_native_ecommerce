import React,{ Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native'
import NavBar from './NavBar'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default class ProductDetails extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
          <NavBar leftIcon="long-arrow-left" rightIcon="shopping-cart" onPressLeftIcon={this._navigate.bind(this)} onPressRightIcon={this.onPressCart} navbarText="Product detail"/>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.imageContainer}>
            <Image source={{uri:"http://www.gucci.com/images/ecommerce/styles_new/201503/web_doublehero/431665_CVL1G_6473_001_web_doublehero_new_theme.png"}} style={styles.image}/>
            <View style={styles.imageFooter}>
              <View style={styles.imageName}>
                <Text style={styles.textStyle}>Name of the product</Text>
              </View>
              <View style={styles.imagePrice}>
                <Text style={styles.textStyle}>$99</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detailsFooter}>
          <View style={styles.sizes}>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSizes}>8</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  _navigate(){
    this.props.navigator.pop()
  }

  onPressCart(){
    console.log("cart Pressed");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  detailsContainer: {
    flex:14
  },
  navbar: {
    flex:1
  },
  imageContainer: {
    flex:1
  },
  detailsFooter: {
    flex:1,
    backgroundColor:"yellow"
  },
  image: {
    flex:7,
    width:width-10,
    height:(height/3),
    alignSelf:"center"
  },
  imageFooter: {
    flex:3,
    flexDirection:"row",
    borderTopWidth:1,
    borderColor:"black",
    borderBottomWidth:1
  },
  imageName: {
    flex:3,
    alignItems:"center",
    justifyContent:"space-around"
  },
  imagePrice: {
    flex:2,
    alignItems:"center",
    justifyContent:"space-around",
    borderLeftWidth:1,
    borderColor:"black"
  },
  textStyle: {
    fontSize:24
  },
  sizes: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"flex-start"
  },
  textSizes: {
    color: "red",
    fontSize:30
  },
  sizeContainer: {
    flex:1,
    backgroundColor:"black",
    borderRadius:200,
    alignItems:"center",
    justifyContent:"center"
  }
});
