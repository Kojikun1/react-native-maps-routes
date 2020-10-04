import React from 'react';
import {StyleSheet, Image,TouchableOpacity} from 'react-native';


function HeaderLeft<T extends { navigation: any}>(obj: T){
    return (
        <TouchableOpacity onPress={() => obj.navigation.openDrawer()} >
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

type HTA = "center" | "left" | undefined;


export default function PageHeader<T extends {navigation: any, title: string}>(obj: T) {
    const prop: HTA = "center"
    return {
        title: obj.title,
        headerTitleAlign: prop,
        headerLeft: () => <HeaderLeft navigation={obj.navigation} />,
        headerBackground: () => <Image source={require('../assets/images/headerBackground.jpg')} style={styles.headerBackground} />
    }
}