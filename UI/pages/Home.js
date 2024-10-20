import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Nav from '../components/nav'
import Collections from '../components/Collections'



export default function Home(props) {
    const x = props.widthHeight

    return (
        <View style={[homeStyle.outer, {width: x.w, height: x.h}]} >
            <Nav />
            <Collections widthAndHeight={x} />
        </View>
    )
}


const homeStyle = StyleSheet.create({
    outer: {
        backgroundColor: '#f6f6f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    middleText: {
        fontSize: 20,
        fontWeight: 600,
        color: '#000'
    }
})