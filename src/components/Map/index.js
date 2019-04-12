import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import { View } from 'react-native';

export default class Map extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <MapView
                onMapReady={() => {
                    PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    )
                }}
                showsUserLocation
                style={{flex:1}}
                region={{
                    latitude: -1.450444,
                    longitude: -48.477652,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                }}
                
                loadingEnabled
                />

            </View>

        );
    }
}