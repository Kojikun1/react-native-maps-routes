import React from 'react';
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import handleButton from './handleButton';

export default function InputMapRoute({originText, destinationText, setDestinationText, setOriginText,setRegion,region }){
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


const styles = StyleSheet.create({
    button: {

        width: width - 100,
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