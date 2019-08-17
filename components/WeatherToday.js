import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid'
import { Avatar } from "react-native-elements"
import {urlTiempo, urlViento, urlLuna} from './../constants/urlImages'
import {fecha} from './../constants/funciones'
import {BLUE, RED} from './../constants/colors'

export default class WeatherToday extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	

	render(){
		const {weatherToday} = this.props
		return(
			<Grid>
				<Col size={50} style={{ justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize:16, marginBottom:15}}>{fecha(weatherToday.name, weatherToday.date)}</Text>
					<Avatar
					  size="large"
					  source={{
					  	uri:`${urlTiempo}${weatherToday.symbol_value}.png`
					  }}
					  overlayContainerStyle={{backgroundColor: 'white'}}
					/>	
					<Text style={{fontSize:22, marginTop: 15}}>
						<Text style={{color:BLUE}}>{weatherToday.tempmin}°</Text> /  <Text style={{color:RED}}>{weatherToday.tempmax}°</Text>
					</Text>
				</Col>
				<Col size={50} style={{alignItems: 'center'}}>
					<Row size={20}>
						<Avatar
					 		size="small"
					        source={{
					  		uri:`${urlViento}${weatherToday.wind.symbolB}.png`
					  		}}
					  		overlayContainerStyle={{backgroundColor: 'white'}}
						/>
					</Row>	
					<Row  size={20}>
						<Text style={{alignItems: 'center' }}>{weatherToday.wind.speed} - {weatherToday.wind.gusts}{'\n'}km / h</Text>
					</Row>
					
					<Row  size={60} style={{ justifyContent:'center' }}>
						<Col style={{alignItems: 'center'}}>
							<Avatar
						 		size="small"
						        source={{
						  		uri:`${urlLuna}${weatherToday.moon.symbol}.png`
						  		}}
						  		overlayContainerStyle={{backgroundColor: 'white'}}
							/>
							<Text style={{marginTop:10}}>{weatherToday.moon.desc.split(',')[0]}</Text>
							<Text style={{}}>I: {weatherToday.moon.in} - F: {weatherToday.moon.out}</Text>
						</Col>
						<Col style={{alignItems: 'center', paddingTop: 27}}>
							<Text>Hum: {weatherToday.humidity}%</Text>
							<Text>Uv: {weatherToday.uv_index_max}</Text>
							<Text>lluvia: {weatherToday.rain}mm</Text>
						</Col>
					</Row>
				</Col>
			</Grid>
		)
	}
}