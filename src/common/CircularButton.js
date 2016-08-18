import React,{ Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

export default class CircularButton extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableHighlight onPress={this.props.onPress} style={style.button}>
        <Text style={style.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  button:{
    backgroundColor:"blue",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    padding:10
  }
})
