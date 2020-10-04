import Geocoder from 'react-native-geocoding';
import GOOGLE_MAPS_APIKEY from '../../api_key';
import { Alert } from 'react-native';

import { Region } from '../screens/maps';

interface Props {
    origin: string,
    destination: string,
    region: Region,
    setRegion: (val: Region) => void
}

const handleButton = <T extends Props>({origin, destination, setRegion, region }: T) =>{

    if(origin != '') {

        Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key
        
        Geocoder.from(origin)
            .then(json => {
                let location = json.results[0].geometry.location;
                console.log("Location origin:", location);
                setRegion({...region, origin: { latitude: location.lat, longitude: location.lng } });

        })
        .catch(error => console.warn(error));
    }

    else {
        Alert.alert("Digite a origem ! ")
    }

    if(destination != '') {

        Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

        Geocoder.from(destination)
        .then(json => {
            let location = json.results[0].geometry.location;
            console.log("Location Destination", location);
            setRegion({...region, destination: { latitude: location.lat, longitude: location.lng } });

        })
        .catch(error => console.warn(error));
    }

    else {
        Alert.alert("Digite o destino ! ");
    }

  }
  export default handleButton;