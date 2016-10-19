/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput, 
  View ,
  Image , 
  Navigator ,
  TouchableHighlight ,
  ListView
} from 'react-native';

// import MyScreen from './js/MyScreen' ;

class myapp extends Component {
_onPressButton(){
      console.log('pressed');
    }

render() {

    return (
       <TouchableHighlight onPress={this._onPressButton}>
        <Text style={{paddingTop: 50}}>Button</Text>
      </TouchableHighlight>
    )
  }



}


class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


AppRegistry.registerComponent('myapp' , () => myapp);



