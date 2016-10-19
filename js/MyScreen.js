import React , { Component } from 'react' ;
import { View , Image , Text } from 'react-native' ;

export default class MyScreen extends Component {

	static get defaultProps(){
		return {
			title : 'MyScreen' ,
		};
	}

	render(){
		return (
			<View style={{paddingTop:20}} >
				<Text>
				  Hi My name is {this.props.title} .
				</Text>
			</View>

		);
	}


} 