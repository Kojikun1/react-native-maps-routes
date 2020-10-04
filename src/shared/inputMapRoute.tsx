import React,{ useState } from 'react';
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import handleButton from './handleButton';

import { Region } from '../screens/maps';

interface Props {
    region: Region,
    setRegion: (val: Region) => void
}

const InputMapRoute: React.FC<Props> = ({region , setRegion }) => {
      
     const [origin,setOrigin] = useState('');
     const [destination,setDestination] = useState('');

     return(
         <View>
             <TextInput
                 style={styles.input}
                 onChangeText={setOrigin}
                 placeholder='Origem'
                 value={origin}
             />
             <TextInput
                 style={styles.input}
                 onChangeText={setDestination}
                 placeholder='Destino'
                 value={destination}
             />
             <TouchableOpacity style={styles.button} onPress={() => handleButton({origin,destination,setRegion,region}) }>
                 <Text style={styles.buttonText}>Buscar Rota</Text>
             </TouchableOpacity>
         </View>
     )
}

export default InputMapRoute;

const styles = StyleSheet.create({
    button: {
        width: width - 40,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginBottom: 15,
        marginHorizontal: 20,
      },
      buttonText: {
        color: '#000',
        fontWeight: 'bold',
      },
      inputContainer: {
        width: '100%',
        maxHeight: 200,
      },
      input: {
        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 20,
      },
})