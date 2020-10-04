import Geocoder from 'react-native-geocoding';
import GOOGLE_MAPS_APIKEY from '../../api_key';
import { Alert } from 'react-native';

interface Props {
    originText: string,
    destinationText: string,
    region: any,
    setRegion: any
}

const handleButton = <T extends Props>({originText, destinationText, setRegion, region }: T) =>{

    if(originText != '') {

        Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key
        
        Geocoder.from(originText)
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

    if(destinationText != '') {

        Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

        Geocoder.from(destinationText)
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