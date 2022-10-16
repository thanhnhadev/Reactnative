import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

export default class Tang_Giam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            so: 0
        }
    }

    render() {
        return (
            <View>
                <Button title='Tăng' onPress={()=>{ this.setState({so:(this.state.so+1)}) }} ></Button>
                <Text style={{color:"red",textAlign:"center", fontSize:20}}>{this.state.so}</Text>
                <Button title='Giam' onPress={()=>{ this.setState({so:(this.state.so-1)}) }} ></Button>
            </View>

        )
    }
}