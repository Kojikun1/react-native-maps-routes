import React from 'react';
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import handleButton from './handleButton';

interface Props {
    originText: string,
    setOriginText: (val: string) => void,
    destinationText: string,
    setDestinationText: (val: string) => void,
    region: any,
    setRegion: any
}

const InputMapRoute: React.FC<Props> = ({originText, setOriginText, destinationText, setDestinationText,region ,setRegion }) => {
     return(
         <View>
             <TextInput
                 style={styles.input}
                 onChangeText={(val) => { setOriginText(val) } }
                 placeholder='Origem'
                 value={originText}
             />
             <TextInput
                 style={styles.input}
                 onChangeText={(val) => { setDestinationText(val) }}
                 placeholder='Destino'
                 value={destinationText}
             />
             <TouchableOpacity style={styles.button} onPress={() => handleButton({originText,destinationText,setRegion,region}) }>
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