import React,{ Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'
import CircularButton from '../common/CircularButton'
const width = Dimensions.get("window").width
export default class Products extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <View style={style.card}>
          <Image source={{uri:this.props.product.image}} style={style.image}/>
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
    )
  }
}

const style = StyleSheet.create({
  image:{
    flex:7,
    width:(width/2)-40,
    alignSelf:'center',
    padding:50
  },
  card:{
    width:(width/2)-35,
    height:300,
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    backgroundColor:"white"
  },
  ProductName:{
    fontSize:22,
    fontWeight:"bold"
  },
  ProductPrice:{
    fontSize:15,
    fontWeight:"bold"
  },
  cardFooter:{
    flex:3,
    flexDirection:"row",
    alignItems:'flex-start',
    justifyContent:'flex-start',
    padding:15,
    borderColor:"black",
    borderTopWidth:1
  },
  desc:{
    flex:3
  },
  descButton:{
    flex:2,
    marginRight:10,
    marginTop:15
  }
})
