import Geocoder from 'react-native-geocoding';
import GOOGLE_MAPS_APIKEY from '../key';

export default function handleButton({originText, destinationText, setRegion, region }){

    if(originText != '') {

        Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

        Geocoder.from(originText)
            .then(json => {
                let location = json.results[0].geometry.location;
                console.log(location);
                setRegion({...region, origin: { latitude: location.lat, longitude: location.lng } });

        })
        .catch(error => console.warn(error));

    }

    else {

        alert("Digite a origem ! ")

    }

    if(destinationText != '') {

        Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

        Geocoder.from(destinationText)
        .then(json => {
            let location = json.results[0].geometry.location;
            console.log(location);
            setRegion({...region, destination: { latitude: location.lat, longitude: location.lng } });

        })
        .catch(error => console.warn(error));
    }

    else {

        alert("Digite o destino ! ")

    }

  }