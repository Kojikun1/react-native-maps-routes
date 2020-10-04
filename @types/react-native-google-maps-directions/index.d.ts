declare module "react-native-google-maps-directions" {

    interface getDireactionsProps{
        destination: any,
        source: any,
        params?: any[]
        waypoints?: any[]
    }
        
    export default function getDireactions<getDireactionsProps>({}: getDireactionsProps): Promise<any>;
}
