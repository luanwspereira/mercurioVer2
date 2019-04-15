import React, { Component, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import { View, Image } from 'react-native';
import Search from '../Search';
import Directions from '../Directions';
import { getPixelSize } from '../utils';
import Geocoder from 'react-native-geocoding';

import Details from '../Details'

Geocoder.init('AIzaSyDfk76azc4xYaHTfdqY0JmtlE-Ks4GMu1A')

import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';

import { Back, LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall } from './styles';


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
            destination: null,
            duration: null,
            location: null
        };
    }
    async componentDidMount() {
        this._isMounted = true;
        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const response = await Geocoder.from({ latitude, longitude });
                const address = response.results[0].formatted_address;
                const location = address.substring(0, address.indexOf(','))

                const region = {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                };
                if (this._isMounted) this.setState({ location, region, regionSet: true });
            },
            error => alert(JSON.stringify(error)), 
            {
                enableHighAccuracy: true,
                timeout: 2000,
                
                //maximumAge: 3000,
            }
        )
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

    handleBack = () => {
        this.setState ({destination:null})
    }

    render() {
        const { region, destination, duration, location } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    onMapReady={() => {
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                        )
                    }}
                    showsUserLocation
                    style={{ flex: 1 }}
                    region={region}
                    loadingEnabled
                    ref={el => (this.mapView = el)}
                >
                    {destination && (
                        <Fragment>
                            <Directions
                                origin={region}
                                destination={destination}
                                onReady={result => {
                                    this.setState({duration: Math.floor(result.duration) })
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: getPixelSize(50),
                                            left: getPixelSize(50),
                                            bottom: getPixelSize(350),
                                            top: getPixelSize(50)
                                        }
                                    });
                                }}
                            />
                            <Marker
                                coordinate={region}
                                anchor={{ x: 0, y: 0 }}
                                
                            >
                                <LocationBox>
                                    <LocationText>
                                        {location}
                                    </LocationText>
                                </LocationBox>
                            </Marker>


                            <Marker
                                coordinate={destination}
                                anchor={{ x: 0, y: 0 }}
                                image={markerImage}
                            >
                                <LocationBox>
                                    <LocationTimeBox>
                                        <LocationTimeText>{duration}</LocationTimeText>
                                        <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                                    </LocationTimeBox>
                                    <LocationText>
                                    {destination.title}
                                    </LocationText>
                                </LocationBox>
                            </Marker>
                        </Fragment>
                    )}

                </MapView>
                {destination ? (
                    <Fragment>
                        <Back onPress={this.handleBack}>
                            <Image source={backImage}/>
                        </Back>
                        <Details/>
                    </Fragment>
                ) : ( <Search onLocationSelected={this.handleLocationSelected}/>
                )}
                
            </View>

        );
    }
}
