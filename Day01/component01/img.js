import React from "react";
import { View, Text, Image } from "react-native";

export default class Img extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Hình lấy trong Thư mục images</Text>
                    <Image source={require("../images/LG.png")} />

                </View>
                <View>
                    <Text>Hình lấy trên Internet set width và height</Text>
                    <Image source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} style={{"width":100,"height":80}} />
                </View>
            </View>

        )
    }
}