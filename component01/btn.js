import React from "react";
import { View, Text, Image, Button, Alert, TouchableOpacity } from "react-native";
import {Teo,Ti,fvThongbao} from '../xu_ly/Dung_chung'
export default class Btn extends React.Component {
    thongbao() {
        alert('phuong thuc thong bao trong lop img')
    }
    hamdungchung(){
        
    }
    render() {
        return (
            <View>
                <View >
                    <Text>
                        Hinh lay trong thu muc
                    </Text>
                    <TouchableOpacity onPress={() => {
                        alert('hello')
                    }} activeOpacity="0.5">
                        <Image source={require("../images/LG.png")} />
                    </TouchableOpacity>

                </View>
                <View >
                    <Button title="nut nhan" color={'red'}
                        onPress={() => { alert("noi dung thong bao alery") }}>

                    </Button>
                </View>
                <View >
                    <Button title="nut nhan su dung alert"
                        onPress={() => { Alert.alert("tieu de", "noidung") }}>

                    </Button>
                </View>
                <View>
                    <Button title="Nut nhan (goiu phuong thuc cua lop)"
                        onPress={() => { this.thongbao() }}></Button>
                </View>
                <View>
                    <Button title="nut nhan(goi ham trong tap tin btn.js" onPress={() => { fvThongbao('hello') }}></Button>
                </View>
                <View>
                    <Button title="nut nhan(goi ham trong tap tin btn.js" onPress={() => { Tong() }}></Button>
                </View>
                <View>
                    <Button title="nut nhan(teo)" onPress={() => {Teo.fncThongbao("hello")}}></Button>
                </View>
                <View>
                    <Button title="nut nhan(ti)" onPress={() => {Ti.fncThongbao("Hello")}}></Button>
                </View>
                
            </View>

        )
    }
}
const Tong = () => {
    alert('ham')
}
