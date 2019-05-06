import React, { Component, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { PermissionsAndroid, View, Image, Text, Button } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import Search from '../Search';
import Directions from '../Directions';
import { getPixelSize } from '../utils';
import Geocoder from 'react-native-geocoding';
import Details from '../Details';
import PontosInfo from '../PontosInfo';
import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';
import menuImage from '../../assets/menu.png'
import { Back, LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall } from './styles';
import { MenuIcon } from '../Menu/styles';

Geocoder.init('AIzaSyDfk76azc4xYaHTfdqY0JmtlE-Ks4GMu1A');

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
    async requestLocationPermission() {
        const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
            //alert("You've access for the location");
        } else {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Cool Location App required Location permission',
                        'message': 'We required Location permission in order to get device location ' +
                            'Please grant us.'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //alert("You've access for the location");
                } else {
                    //alert("You don't have access for the location");
                }
            } catch (err) {
                alert(err)
            }
        }
    };
    async componentDidMount() {
        this.requestLocationPermission();
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
                //enableHighAccuracy: true,
                timeout: 2000,
                maximumAge: 3000,
            }
        )
        this.setState({destination: this.props.navigation.state.params.destination});
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
        console.log(this.state.destination.title);
        console.log(data);
    }

    handleBack = () => {
        this.setState ({destination: null})
    }

    setadorOficial = () => {
        this.setState ({destination: {
            latitude: -1.4494597,
            longitude: -48.50084879999999,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
            title: "Estação das Docas"
        } });
    }

    render() {
        const {navigate} = this.props.navigation;
        const { region, duration, destination, location } = this.state;
        console.log(this.props.navigation.state.params.destination);
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    onMapReady={() => {
                        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
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
                                destination={this.props.navigation.state.params.destination}
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
                                coordinate={this.props.navigation.state.params.destination}
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
                        <Back onPress={this.handleBack } >
                            <Image source={backImage}/>
                        </Back>
                        <Details destination={destination}  navigation={this.props.navigation}/>
                    </Fragment>
                ) : (
                <Fragment>
                    <MenuIcon onPress={() => this.setadorOficial()}>
                        <Image source={menuImage}/>                        
                    </MenuIcon>
                </Fragment>
                
                )}
            
            </View>

        );
    }
}
/*
                <Fragment>
                    <MenuIcon onPress={() => this.setadorOficial()}>
                        <Image source={menuImage}/>                        
                    </MenuIcon>
                    <Search onLocationSelected={this.handleLocationSelected}/>
                </Fragment>
*/

//<Button title="azaia" onPress={() => this.props.navigation.navigate('PontosPage')}/>