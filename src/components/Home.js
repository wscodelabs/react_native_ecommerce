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

import {
  Container,
  Header,
  Content,
  Title,
  Icon,
  Button,
  Grid,
  Row
} from 'native-base'

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
      <Container>
      <Header>
        <Button transparent onPress={this._navigate.bind(this)}>
          <Icon name="ios-menu"/>
        </Button>
        <Title>Activities</Title>
        <Button transparent>
          <Icon name="ios-cart"/>
        </Button>
      </Header>
      <Content>
        <Grid style={{flex:1}}>
          {this.listAllImages()}
        </Grid>
      </Content>
      </Container>
    );
  }
  listAllImages(){
    return products.map((product)=>{
      return <Row style={{flex:1,paddingBottom:20}} key={product.name}>
              <TouchableHighlight onPress={this._navigate.bind(this)} style={{flex:1}}>
              <ProductItem product={product} onPressProduct={this._navigate.bind(this)}/>
              </TouchableHighlight>
              </Row>
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
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
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
    flex:1,
    justifyContent:"space-between",
    alignItems:"center"
  }
});
