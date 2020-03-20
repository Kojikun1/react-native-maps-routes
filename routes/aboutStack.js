import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'
import PageHeader from '../shared/pageHeader'

const Stack = createStackNavigator();

export default function AboutStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
               name='About'
               component={About}
               options={({navigation}) => PageHeader({navigation,title:"About"})}
            />
        </Stack.Navigator>
    )
}