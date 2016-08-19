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
import {
  Container,
  Header,
  Content,
  Title,
  Button,
  Icon,
  Grid,
  Row,
  Card,
  CardItem,
  Thumbnail,
  Col,
  Badge
} from 'native-base'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default class ProductDetails extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <Header>
          <Button transparent onPress={this._navigate.bind(this)}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>Product Details</Title>
          <Button transparent>
            <Icon name="ios-cart"/>
          </Button>
        </Header>
        <Content>
          <Grid style={{flex:1}}>
            <Row style={{ backgroundColor: '#D954D7',flex:3}}>
              <Card style={{flex:1}}>
                <CardItem style={{flex:7,alignItems:"center",justifyContent:"space-around"}}>
                  <Image style={{ resizeMode: 'cover',flex:1,alignSelf:"center"}} source={require("../images/shoes.png")} />
                </CardItem>

                <CardItem style={{flex:1}}>
                  <Grid>
                    <Col style={{flex:2,justifyContent:"center",alignItems:"center"}}>
                      <Text style={{fontWeight:"bold"}}>Name of the product</Text>
                    </Col>
                    <Col style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                      <Text style={{fontWeight:"bold"}}>$99</Text>
                    </Col>
                  </Grid>
                </CardItem>
              </Card>
            </Row>
            <Row style={{flex:2,padding:10}}>
              <Grid style={{flex:1}}>
                <Row style={{flex:1}}>
                  <Grid style={{flex:1}}>
                    <Row style={{flex:1}}>
                      <Text style={{fontWeight:"bold"}}>SIZE</Text>
                    </Row>
                    <Row style={{flex:1,flexDirection:"row"}}>
                    <Badge primary style={{marginLeft:10}}>9</Badge>
                    <Badge primary style={{marginLeft:10}}>10</Badge>
                    <Badge primary style={{marginLeft:10}}>11</Badge>
                    <Badge primary style={{marginLeft:10}}>12</Badge>
                    <Badge primary style={{marginLeft:10}}>13</Badge>
                    </Row>
                  </Grid>
                </Row>
                <Row style={{flex:1}}>
                  <Grid style={{flex:1}}>
                    <Row style={{flex:1}}>
                      <Text style={{fontWeight:"bold"}}>COLOR</Text>
                    </Row>
                    <Row style={{flex:1,flexDirection:"row"}}>
                      <Badge style={{marginLeft:10}}></Badge>
                      <Badge primary style={{marginLeft:10}}></Badge>
                      <Badge success style={{marginLeft:10}}></Badge>
                      <Badge info style={{marginLeft:10}}></Badge>
                      <Badge warning style={{marginLeft:10}}></Badge>
                      <Badge danger style={{marginLeft:10}}></Badge>
                    </Row>
                  </Grid>
                </Row>
                <Row style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                  <Button rounded>
                    + Add to Cart
                  </Button>
                </Row>
              </Grid>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }

  _navigate(){
    this.props.navigator.pop()
  }

  onPressCart(){
    console.log("cart Pressed");
  }
}
