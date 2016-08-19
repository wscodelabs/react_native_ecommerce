import React,{ Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Touchable
} from 'react-native'

import {
  Row,
  Col,
  Grid,
  Button,
  Card,
  CardItem
} from 'native-base'

export default class Products extends Component {
  constructor(props){
    super(props)
  }
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render(){
    return(
      <View style={{flex:1}} ref={component => this._root = component}>
        <Grid style={{flex:1}}>
          <Row style={{flex:5,justifyContent:"space-between",alignItems:"center"}}>
          <Card style={{flex:1}}>
            <CardItem style={{flex:5,alignItems:"center",justifyContent:"space-around"}}>
              <Image style={{ resizeMode: 'cover',flex:1,alignSelf:"center"}} source={require("../images/shoes.png")} />
            </CardItem>

            <CardItem style={{flex:1}}>
              <Grid>
                <Col style={{flex:2,justifyContent:"center",alignItems:"flex-start"}}>
                  <Text style={{fontWeight:"bold"}}>{this.props.product.name}</Text>
                  <Text style={{fontWeight:"bold"}}>$99</Text>
                </Col>
                <Col style={{flex:1,justifyContent:"center",alignItems:"flex-start"}}>
                  <Button rounded primary>+ Add</Button>
                </Col>
              </Grid>
            </CardItem>
          </Card>
          </Row>
        </Grid>
        </View>
    )
  }
}

const style = StyleSheet.create({
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
