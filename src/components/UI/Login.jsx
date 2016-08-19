import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Container, Content } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"

export default Login extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Container >
        <Content>
          <Grid>
            <Row>
              <Image source={{uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkmTmr871hhGXG7DuJ6jyxrJDopsmg178ntS7J8XC0wL6KfQLr2g'}}
                style={LoginStyles.bgImage} >

              </Image>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}

const LoginStyles= StyleSheet.create({
  bgImage:{
    flex: 1,
   width: null,
   height: null,
  }
})
