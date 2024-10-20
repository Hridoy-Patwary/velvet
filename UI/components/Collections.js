import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    Image,
} from 'react-native';

const Collections = (props) => {
    const WH = props.widthAndHeight;
    const devidedWidth = WH.w / 100;
    return (
        <SafeAreaView style={[styles.container, {left: devidedWidth*0}]}>
            <Text style={styles.containerMainTittle}>Hot Collections</Text>
            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={[styles.itemView, {width: devidedWidth*70}]}>
                    <Image source={require('../../assets/add-img.jpg.avif')} style={styles.itemViewCoverImg}/>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={{fontSize: 13, fontWeight: '700', color: '#fff'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.itemView, {width: devidedWidth*70}]}>
                    <Image source={require('../../assets/add-img2.jpg')}  style={styles.itemViewCoverImg}/>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={{fontSize: 13, fontWeight: '700', color: '#fff'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.itemView, {width: devidedWidth*70}]}>
                    <Image source={require('../../assets/add-img3.jpg')}  style={styles.itemViewCoverImg}/>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={{fontSize: 13, fontWeight: '700', color: '#fff'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        position: 'absolute',
        top: 0,
        width: '100%',
        alignItems: 'center'
    },
    containerMainTittle: {
        width: '90%',
        fontWeight: 'bold',
        fontSize: 20
    },
    scrollView: {
        width: '100%',
        padding: 10,
        paddingLeft: '5%'
    },
    itemView: {
        borderRadius: 10,
        backgroundColor: '#fff',
        marginRight: 10,
        height: 150,
        overflow: 'hidden',
        position: 'relative'
    },
    itemViewCoverImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    addToCart: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#000'
    }
});

export default Collections;