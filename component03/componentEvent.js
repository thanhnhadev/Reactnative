import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
export default class componentEvent extends React.Component {
    constructor(props) {
        super(props);
        console.log("phuong thuc khoi tao");
    }
    XL_NHAN() {
        console.log("phuong thuc dinh nghia");
    }
    render() {
        console.log('render');
        return (
            <View style={styles.middle}>
                <TouchableOpacity onPress={this.XL_NHAN.bind(this)}>
                    <Text>
                        Goi phuong thuc nhan
                    </Text>
                </TouchableOpacity>
                <View style={[styles.box, styles.big_green_box]}>
                    <View style={[styles.inner_box, styles.orange_box]}>

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#333'
    },
    big_green_box: {
        backgroundColor: 'green'
    },
    inner_box: {
        width: 20,
        height: 20,
    },
    orange_box: {
        position: 'absolute',
        backgroundColor: 'orange',
        top: 10,
        right: 10
    }
})