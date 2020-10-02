import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import  MapView  from 'react-native-maps'
import  MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import InputMapRoute from '../shared/inputMapRoute'
import globalStyles from '../styles/globalStyles'
import GOOGLE_MAPS_APIKEY from '../../api_key'


export default function MapScreen() {
    let [region,setRegion] = useState({
        origin: { latitude: -23.55643424, longitude: -46.63638353 },
        destination: { latitude: -23.55644342, longitude: -46.63638353 },
        originText: '',
        destinationText: ''
    });
    
    function setOriginText(val){
        setRegion({...region,originText: val});
        console.log(region);
    }
    function setDestinationText(val){
        setRegion({...region,destinationText: val});
        console.log(region);
    }
    // function to get access to the Currenty location // 
    function getLocation() {
        Geolocation.getCurrentPosition((position) => {
            let newOrigin = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            console.log('new origin');
            console.log(newOrigin);
            setRegion({...region,origin: newOrigin,});
        },(err) => {
            console.log('Error', err);
        },{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000} )
    }
    // async function to request the android access to the location //
    async function requestLocationPermission(){
        try{
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': "App Location Permission",
                    'message': 'Maps App needs access to your map so you can be navigated'
                }
            );
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log("You can use the Location");
                return true;
            }else{
                console.log("Location permission denied");
                return false;
            }
        }catch(err){
            console.warn(err);
        }
    }
    useEffect( () => {
         console.log('usEffect start');
         let isGranted = requestLocationPermission();

        if(isGranted){
             getLocation();
         }
        console.log('Current Region State');
        console.log(region);
    },[])
    function handleGetGoogleMapDirections(){
    
        const data = {
    
            source: region.origin,
            destination: region.destination,
            params: [
                {
                  key: "travelmode",
                  value: "driving"
                }
            ]
            
        };
    
        getDirections(data)
    
      };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.mapContainer}>
            <MapView
                ref={map => mapView = map}
                style={globalStyles.map}

                region={{
                        latitude: (region.origin.latitude + region.destination.latitude) / 2,
                        longitude: (region.origin.longitude + region.destination.longitude) / 2,
                        latitudeDelta: Math.abs(region.origin.latitude - region.destination.latitude) + Math.abs(region.origin.latitude - region.destination.latitude) * .1,
                        longitudeDelta: Math.abs(region.origin.longitude - region.destination.longitude) + Math.abs(region.origin.longitude - region.destination.longitude) * .1,

                    }}
                loadingEnabled={true}
                toolbarEnable={true}
                zoomControlEnabled={true}
            >
                <MapView.Marker
                coordinate={region.destination}
                >
                    <MapView.Callout onPress={handleGetGoogleMapDirections}>
                        <Text>Press to Get Direction</Text>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                     coordinate={region.origin}
                >
                    <MapView.Callout>
                        <Text>Voce esta aqui</Text>
                    </MapView.Callout>
                     
                </MapView.Marker>
               <MapViewDirections 
                    origin={region.origin}
                    destination={region.destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    onError={()=> alert('Rota não Encontrada')}
               />
            </MapView>
            {/*input component for set and get state data origin and destination text */}
            <InputMapRoute
                   setOriginText={setOriginText}
                   setDestinationText={setDestinationText}
                   originText={region.originText}
                   destinationText={region.destinationText}
                   setRegion={setRegion}
                   region={region}
           />
        </View>
        </TouchableWithoutFeedback>
    )
}

