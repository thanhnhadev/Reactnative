import React from "react";
import { Text, View } from 'react-native';
import { Content,Footer,Header } from "./comChilds";
export default class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text>Helloword</Text>
                <Text>Wellocometo react</Text>
            </View>
        )
    }
}
export class Thongtin extends React.Component {
    render() {
        return (
            <View>
                <Header/>
            
                <Text>hom nay la thu 7</Text>
                <Content/>
                <Footer/>
            </View>
           
        )
    }
}