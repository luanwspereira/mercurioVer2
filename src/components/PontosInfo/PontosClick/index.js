import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';

import flatListData from '../../../data/Pontos/estacaoDoc';
import { ScrollView } from 'react-native-gesture-handler';

export default class PontosClick extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Estação das Docas";
        return { headerTitle }
    }
    constructor(props) {
        super(props);
        this.state = {
            destination: {
                latitude: -1.4494597,
                longitude: -48.50084879999999,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
                title: "Estação das Docas"},
        };
    }

    render(){
        const {destination} = this.state;
        const {navigate} = this.props.navigation;
        console.log("Pontos Click", destination);
        return(
            <View style={{
                flex: 1,
                marginTop: 1,
                backgroundColor: '#6D3BD2'
            }}>
                <FlatList 
                data={flatListData}
                renderItem = {({item, index})=>{
                    return(
                            <View sytle={{flex:1}}>
                                <Text style={{flex:1, padding:10, fontSize:18, color: 'white', justifyContent: 'center', alignSelf: 'center', margin: 10}}>{item.name}</Text>
                                <Image
                                    source={{uri:item.imageUrl}}
                                    style={{ height: 400, margin: 5, flex: 1}}
                                />
                                <Text style={{flex:1, padding:20, fontSize:18, color: 'white'}}>{item.descricao}</Text>
                            </View>
                    )
                }}>
                </FlatList>
            <Button title="Solicitar Mercúrio para este ponto" color="#6032bc" destination={destination}  navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('Map', {destination: destination})}></Button>
            </View>
        )
    }
}