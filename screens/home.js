import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles'
import MapImage from '../shared/mapImage'

export default function Home({navigation}){
    return (
        <View style={globalStyles.container} >
            <MapImage onPress={() => navigation.navigate('MapScreen')} />
        </View>
    )
}