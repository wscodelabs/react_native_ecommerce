import React,{ Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import CircularButton from '../common/CircularButton'
const width = Dimensions.get("window").width
export default class Products extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableHighlight onPress={this.props.onPressProduct} style={style.card} underlayColor="#F5F5F5">
        <View style={style.card}>
          <View style={style.imageContainer}>
            <Image source={{uri:this.props.product.image}} style={style.image}/>
          </View>
          <View style={style.cardFooter}>
            <View style={style.desc}>
              <Text style={style.ProductName}>{this.props.product.name}</Text>
              <Text style={style.ProductPrice}>{this.props.product.price}</Text>
            </View>
            <View style={style.descButton}>
              <CircularButton text="+ Add" />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  image:{
    width:width-10,
    height:600,
    alignSelf:'center'
  },
  imageContainer: {
    height:600
  },
  card:{
    flex:1,
    alignSelf:"center",
    backgroundColor:"white",
    marginTop:20
  },
  ProductName:{
    fontSize:17,
    fontWeight:"bold"
  },
  ProductPrice:{
    fontSize:14,
    fontWeight:"bold"
  },
  cardFooter:{
    flex:5,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    borderColor:"black",
    borderTopWidth:1,
    height:100
  },
  desc:{
    flex:4,
  },
  descButton:{
    flex:2,
  }
})
