import React from 'react'
import { StyleSheet, View, Text, Button, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');
const devidedWidth = width / 100;


export default function Nav() {
    return (
        <View style={navStyle.container}>
            <TouchableOpacity style={[navStyle.navBottomBtn, {backgroundColor: '#000'}]}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Collections</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[navStyle.navBottomBtn, {backgroundColor: '#e79062'}]}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Featured</Text>
            </TouchableOpacity>
        </View>
    )
}


const navStyle = StyleSheet.create({
    container: {
        width: width,
        position: 'absolute',
        top: height - 100,
        left: devidedWidth * 10,
        width: devidedWidth * 80,
        height: 60,
        // backgroundColor: '#e88769',
        // backgroundColor: '#f6e064',
        // backgroundColor: '#e79062',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 10,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        flexDirection: 'row',
        padding: 5,
        gap: 5
    },
    navBottomBtn: {
        fontWeight: 'bold',
        height: '100%',
        width: "49%",
        borderRadius: '50',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
