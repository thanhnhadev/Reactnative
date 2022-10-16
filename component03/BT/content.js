import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
export default class Content extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View>
              
                <Text style={[styles.content]}>{this.props.list.length}</Text>
                
            </View>
        )
    }
}

Content.propTypes = {
  
    list: PropTypes.array
}


const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        fontSize: 24,
        color: 'green',
        textAlign: "center"
    }

});
