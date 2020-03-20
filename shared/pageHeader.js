import React from 'react';
import {StyleSheet, Image,TouchableOpacity} from 'react-native';


function HeaderLeft({navigation}){
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()} >
            <Image source={require('../assets/images/myicon.png')} style={styles.headerButton} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerButton: {
        width: 34,
        height: 34,
        marginLeft: 20,
    },
    headerBackground: {
        height: 50
    }
})

export default function PageHeader({navigation,title}) {
    return {
        title: title,
        headerTitleAlign: 'center',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerBackground: () => <Image source={require('../assets/images/headerBackground.jpg')} style={styles.headerBackground} />
    }
}