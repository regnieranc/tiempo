import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity, Modal, Alert, Button } from 'react-native';
import { Header} from 'react-native-elements'
import {Grid, Row, Col} from 'react-native-easy-grid'
import {GREEN, YELLOW, BLUE} from './constants/colors'
import {CITIES} from './constants/cities'
import ListCities from './components/ListCities'
import WeatherToday from './components/WeatherToday'
import Weather from './components/Weather'

import { urlApi1, urlApi2 } from './constants/urlApi'



export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      color: GREEN, 
      city: 'Concepcion',
      id: 18576,
      disponibility: false,
      weatherToday:null, 
      w1:null,
      w2:null,
      w3:null,
      w4:null,
      modal:false
    }
   
    
  }

  handleCity = async(ele) => {
    await this.setState({color: GREEN})
    await this.setState({id: ele.id, disponibility:!this.state.disponibility, city:ele.name})
    await this.getData()
  }

  getData = () => { 
    const url=`${urlApi1}${this.state.id}${urlApi2}`
    console.log(url)
    fetch(url).then(data => data.json()).then(data => {
      this.setState({disponibility:!this.state.disponibility, weatherToday:data.day['1'], w1:data.day['2'],w2:data.day['3'],w3:data.day['4'],w4:data.day['5']})
      data.day['1'].symbol_value<=5? this.setState({color: YELLOW}):this.setState({color: BLUE})
    })
  }

  componentDidMount(){
    this.getData()
  }

  handleAcercade = () => {
    this.setState({modal:!this.state.modal})
  }

  render(){
    return (
      <View>
        <Header
          leftComponent={{text:'El Tiempo', style:{color: 'white'}}}
          containerStyle={{backgroundColor: this.state.color,justifyContent: 'space-around'}}
          centerComponent={{text:this.state.city, style:{color: 'white', fontSize: 20} }}
          rightComponent={<TouchableOpacity onPress={this.handleAcercade}><Text style={{color: 'white'}}>Acerca de</Text></TouchableOpacity>}
         />  
        <ScrollView style={{height:250}}>  
          { 
            <ListCities
             cities={CITIES}
             funcion={this.handleCity}
            />
          }  
        </ScrollView>
        {
          !this.state.disponibility?
            <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 150}}/> : 
            <ScrollView style={{marginTop:20, marginLeft:15, marginRight: 15}}>
              <Grid>
                <Row style={{ height: 200}}>
                  <Col>
                    <WeatherToday 
                      weatherToday={this.state.weatherToday}
                    />
                  </Col>
                </Row>
                <Row style={{ height: 130}}>
                  <Col>
                    <Weather
                      weather={this.state.w1}
                    />
                  </Col>
                  <Col>
                    <Weather
                      weather={this.state.w2}
                    />
                  </Col>
                </Row>
                <Row style={{ height: 130}}>
                  <Col>
                    <Weather
                      weather={this.state.w3}
                    />
                  </Col>
                  <Col>
                    <Weather
                      weather={this.state.w4}
                    />
                  </Col>
                </Row>
              </Grid>
            </ScrollView>

        }
        {
          this.state.modal?
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modal}
            >
              <Grid>
                <Col style={{alignItems:'center', justifyContent:'center'}}>
                  <Text style={{paddingBottom:30, fontWeight:'bold', fontSize: 26}}>Acerca de</Text>
                  <Text>Version: 1.0</Text>
                  <Text>Api: meteored.cl, version 3.0</Text>
                  <Text>Desarrollado por: Regnier Neira</Text>
                  <Text style={{fontWeight:'bold', fontSize:16}}>contacto@regnierneira.com</Text>
                  <Text style={{paddingBottom:30}}>React Native</Text>
                  <Button 
                    onPress={() => this.setState({modal:!this.state.modal})}
                    title='Aceptar'
                  />
                  </Col>
              </Grid>
            </Modal> : null 
        }
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
