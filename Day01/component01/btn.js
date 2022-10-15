import React from "react";
import { View, Text, Image,Button,Alert,TouchableOpacity } from "react-native";
import {Tuan,Nam,fncThongbao} from "../xu_ly/Dung_chung"
export default class Img extends React.Component {
    thongbao(){
        alert('Phương thức thongbao trong lớp Img')
    }
    
    render() {
        return (
            <View>
                <View>
                    <Text>Hình lấy trong Thư mục images</Text>
                    {/* TouchableOpacity */}
                    <TouchableOpacity onPress={()=>{alert('Hello')}} activeOpacity="0.5">
                        <Image source={require("../images/LG.png")} />
                    </TouchableOpacity>
                    

                </View>
                <View>
                    <Button title="Nút nhấn" color={"red"} onPress={()=>{alert('Nội dung thông báo sử dụng Hàm alert')}} ></Button>
                </View>
                <View>
                    <Button title="Nút nhấn (Sử dụng class Alert )" onPress={()=>{Alert.alert('Tiêu đề','Nội dung')}} ></Button>
                </View>
                
                <View>
                    <Button title="Nút nhấn (Gọi Phương thức của Lớp)" onPress={()=>{this.thongbao()}} ></Button>
                </View>
                <View>
                    <Button title="Nút nhấn (Gọi Hàm trong tập tin btn.js)" onPress={()=>{Tong()}} ></Button>
                </View>
                <View>
                    <Button title="Nút nhấn (Gọi Hàm trong tập tin Dung_chung.js)" onPress={()=>{fncThongbao('Hello')}} ></Button>
                </View>
                <View>
                    <Button title="Nút nhấn (Gọi Hàm trong tập tin Dung_chung.js)" onPress={()=>{Tuan.fncThongbao('Hello')}} ></Button>
                </View>
            </View>

        )
    }
}

const Tong=()=>{
    alert('Hàm ')
}