import React,{ Component } from 'react'
import { View,Text,TouchableHighlight,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ToolBarText from './ToolBarText'

export default class NavBar extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.toolbarContainer}>
        <TouchableHighlight onPress={this.props.onPressMenu} style={styles.image}>
          <Icon name={this.props.leftIcon} color="white" style={styles.icon}/>
        </TouchableHighlight>
        <View style={styles.toolBarText}>
          <ToolBarText text={this.props.navbarText}/>
        </View>
        <TouchableHighlight onPress={this.props.onPressCart} style={styles.image}>
          <Icon name="shopping-cart" color="white" style={styles.icon}/>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbarContainer: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#42A5F5"
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
  },
  icon: {
    flex:1,
    alignSelf:"center",
    fontSize:40
  }
})
