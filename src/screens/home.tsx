import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles'
import MapImage from '../shared/mapImage'
import { StackNavigationProp } from '@react-navigation/stack';

interface Props { navigation: any }

const Home: React.FC<Props> = ({navigation}) => {
    return (
        <View style={globalStyles.container} >
            <MapImage onPress={() => navigation.navigate('MapScreen')} />
        </View>
    )
}

export default Home