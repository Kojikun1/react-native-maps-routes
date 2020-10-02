import {StyleSheet} from 'react-native'


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    
});


export default globalStyles