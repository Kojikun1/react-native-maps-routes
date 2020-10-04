import Geocoder from "react-native-geocoding";

// Need to put this code on // node_modules/react-native-geocoding/index.d.ts //
/*
declare module 'react-native-geocoding' {
        export default class Geocoder {
            public static init(apiKey: string, options?: Object): void;
            public static isInit(): boolean;
            public static setApiKey(API_KEY: string): void;
            public static from(...params: any[]): Promise<any>;
            public static getFromLocation(address: string): Promise<any>;
            public static getFromLatLng(lat: number, lng: number): Promise<any>;
    }
}
*/