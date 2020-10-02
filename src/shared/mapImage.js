import React from 'react';
import {StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function MapImage({onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
             <Image
                source={require('../assets/images/map-image.png')}
                style={styles.mapImage}
             />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mapImage: {
        width: 200,
        height: 150,
    }
})