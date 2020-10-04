import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import MapScreen from '../screens/maps'
import PageHeader from '../shared/pageHeader'
const Stack = createStackNavigator();



export default function HomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
               name='Home'
               component={Home}
               options={({navigation}) => PageHeader({ navigation, title: "Home" })}
            />
            <Stack.Screen
               name='MapScreen'
               component={MapScreen}
            />
        </Stack.Navigator>
    )
}