import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {fecha} from './../constants/funciones'
import {urlTiempo, urlViento} from './../constants/urlImages'
import {Avatar, Icon} from 'react-native-elements'
import {BLUE, RED} from './../constants/colors'

export default class Weather extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		const {weather} = this.props
		return (
			<View style={{alignItems: 'center'}}>
				<Text>{fecha(weather.name, weather.date)}</Text>
				<View>
					<Avatar
					    size="medium"
				        source={{
					   	uri:`${urlTiempo}${weather.symbol_value}.png`
					    }}
					    overlayContainerStyle={{backgroundColor: 'white'}}
					/>	

				</View>
				<Text><Text style={{color: BLUE}}>{weather.tempmin}°</Text> / <Text style={{color: RED}}>{weather.tempmax}°</Text></Text>
				<View>
					
				</View>
			</View>
		)
	}
}