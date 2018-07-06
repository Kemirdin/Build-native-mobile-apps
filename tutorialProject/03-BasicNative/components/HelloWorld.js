import React, {Component} from 'react';
import {Text} from 'react-native';

export default class HelloWorld extends Component {
    render() {
        let greeting = `Hello world. My name is Nguyen Duc Hoang`;
        return ( <Text> {greeting} </Text>
        );
    }
}