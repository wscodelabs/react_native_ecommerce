import React,{ Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import NavBar from './NavBar'

export default class ProductDetails extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <NavBar onPressMenu={this.onPressMenu} onPressCart={this.onPressCart} navbarText="Product detail"/>
      </View>
    )
  }

  onPressMenu(){
    console.log("menu pressed");
  }

  onPressCart(){
    console.log("cart Pressed");
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
    flexWrap:'wrap',
    flexDirection:'row'
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
