import React from 'react';
import {StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Props {
    onPress: () => void
}

const MapImage: React.FC<Props> =({onPress}) => {
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

export default MapImage