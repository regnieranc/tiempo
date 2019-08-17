import React, {Component} from 'react'
import {ListItem} from 'react-native-elements'

export default class ListCities extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	estafuncion = (ele) => {
		this.props.funcion(ele)
	}

	render(){
		return(
			this.props.cities.city.map(ele => <ListItem
				title={ele.name}
                subtitle={ele.region}
                key={ele.id}
               	onPress={() => this.estafuncion(ele)}
              /> 
            )
		)
	}
}