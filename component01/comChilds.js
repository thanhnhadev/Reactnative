import React from "react";
import { View, Text } from "react-native";
export class Header extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Header page
                </Text>
                
            </View>
        )
    }
}

export class Content extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Content Page
                </Text>
            </View>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Footer Page
                </Text>
            </View>
        )
    }
}