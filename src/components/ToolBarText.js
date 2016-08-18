import React,{ Component } from 'react'
import { View,StyleSheet,Text } from 'react-native'

export default class ToolBarText extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:30,
    color:"white",
    fontWeight:"bold"
  }
})
