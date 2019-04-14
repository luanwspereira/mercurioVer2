import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import { View } from 'react-native';
import Search from '../Search';
import Directions from '../Directions';
import { getPixelSize } from '../utils';

export default class Map extends Component {
    state ={
        region: null,
        destination: null,
    };

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            ({ coords : { latitude, longitude } }) => {
                this.setState({ 
                    region: { 
                    latitude, 
                    longitude, 
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                } 
            });
            }, //sucesso
            () => {}, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        );
    }
    
    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;
        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        })
    } 

    render(){
        const { region, destination } = this.state;
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
                region={region}
                
                loadingEnabled
                ref = {el => (this.mapView = el)}
                >
                    {destination && (
                        <Directions
                            origin={region}
                            destination = {destination}
                            onReady={result => {
                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: getPixelSize(50),
                                        left: getPixelSize(50),
                                        bottom: getPixelSize(50),
                                        top:getPixelSize(50)
                                    }
                                });
                            }}
                        />
                    )}

                </MapView>
                <Search 
                onLocationSelected= {this.handleLocationSelected}
                />

            </View>

        );
    }
}