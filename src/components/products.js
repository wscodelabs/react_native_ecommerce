import React,{ Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

export default class Products extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props);
    return(
      <View>
        <Text>
          76tgyg
        </Text>
        <Image source={{uri:this.props.product.image}} style={{width:100,height:100}}/>
      </View>
    )
  }
  getStyle(){
    return {
      width:"100px",
      height:"100px"
    }
  }
}
