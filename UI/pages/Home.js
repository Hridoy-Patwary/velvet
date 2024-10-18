import React from 'react'
import { StyleSheet, View, Text } from 'react-native'



export default function Home(props) {
    const x = props.widthHeight

    return (
        <View style={[homeStyle.outer, {width: x.w, height: x.h}]} >
            <Text style={homeStyle.middleText}>Welcome to the home page</Text>
        </View>
    )
}


const homeStyle = StyleSheet.create({
    outer: {
        backgroundColor: '#3334',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    middleText: {
        fontSize: 20,
        fontWeight: 600
    }
})