import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';

import flatListData from '../../../data/Pontos/estacaoDoc';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export default class PontosClick extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Informacoes";
        return { headerTitle }
    }
    constructor(props) {
        super(props);
        this.state = {
            destination: {
                latitude: parseFloat(this.props.navigation.state.params.latitude, 10),
                longitude: parseFloat(this.props.navigation.state.params.longitude, 10),
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
                title: this.props.navigation.state.params.name},
        };
        console.log(this.state.destination);
    }

    render(){
        const {destination} = this.state;
        const {navigate} = this.props.navigation; 
        console.log(this.props.navigation.state.params);
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff'
            }}>
                <View style={{flex:1}}>
                    <Text sytle={styles.Name}>{this.props.navigation.state.params.name}</Text>
                    <Image source={{uri:this.props.navigation.state.params.imageUrl}}/>
                    <View style={{
                        flex:1,
                        flexDirection:'row', 
                        justifyContent: 'space-evenly',
                        textAlign: 'center'
                    }}>
                        <View >
                            <Text >Estacionamento</Text>
                            <Text >{this.props.navigation.state.params.estacionamento}</Text>
                        </View>

                        <View >
                            <Text >Entrada</Text>
                            <Text>{this.props.navigation.state.params.entrada}</Text>
                        </View>
                        
                        <View >
                            <Text>Lojas</Text>
                            <Text>{this.props.navigation.state.params.Lojas}</Text>
                        </View>
                    </View>
                    <Text style={styles.Descricao}>{this.props.navigation.state.params.descricao}</Text>
                </View>
                   
            <Button title="Solicitar Mercúrio para este ponto" color="#6032bc" destination={destination}  navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('Map', {destination: destination})}></Button>
            </View>
        )
    }
}

/*
    render(){
        const {destination} = this.state;
        const {navigate} = this.props.navigation; 
        console.log(this.props.navigation.state.params);
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff'
            }}>
                <FlatList 
                data={flatListData}
                renderItem = {({item, index})=>{
                    return(
                            <View sytle={{flex:1}}>
                                <Text style={styles.Name}>{item.name}</Text>
                                <Image
                                    source={{uri:item.imageUrl}}
                                    style={styles.ImageShow}
                                />
                                <View style={{
                                    flex:1,
                                    flexDirection:'row', 
                                    justifyContent: 'space-evenly',
                                    textAlign: 'center'
                                }}>
                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Estacionamento</Text>
                                        <Text style={styles.Estacionamento}>{item.estacionamento}</Text>
                                    </View>

                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Entrada</Text>
                                        <Text style={styles.Estacionamento}>{item.entrada}</Text>
                                    </View>
                                    
                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Lojas</Text>
                                        <Text style={styles.Estacionamento}>{item.Lojas}</Text>
                                    </View>
                                </View>
                                <Text style={styles.Descricao}>{item.descricao}</Text>
                            </View>
                    )
                }}>
                </FlatList>
            <Button title="Solicitar Mercúrio para este ponto" color="#6032bc" destination={destination}  navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('Map', {destination: destination})}></Button>
            </View>
        )
    }
}
*/