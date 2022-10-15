import React from "react";
import { Text, View } from "react-native";

import {Header,Content,Footer} from "./comChilds";

export default class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text>Chào mừng các bạn đến</Text>
                <Text>React Native</Text>
            </View>
        )
    }
}

export class Thongtin extends React.Component {
    render() {
        return (
            <View>
                <Header />
                <View>
                    <Text>Giáo viên Nguyễn Anh Tuấn</Text>
                </View>
                <View>
                    <Text>Email: natuan@gmail.com</Text>
                </View>
                <Content />
                <Footer />
            </View>
        )
    }
}