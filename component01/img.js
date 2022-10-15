import React from "react";
import { View, Text, Image } from "react-native";
export default class Imgs extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Hinh lay trong thu muc
                    </Text>
                    <Image source={require("../images/LG.png")} />
                </View>
                <View >
                    <Text>Hinh lay tren mang</Text>
                    <Image source={{ uri: `http://thaunguyen.com/blog/wp-content/uploads/2018/08/react.png` }}
                     style={{ "width": 150, "height": 100 }} />
                </View>
            </View>

        )
    }
}