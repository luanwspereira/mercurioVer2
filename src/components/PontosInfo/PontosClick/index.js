import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';

import flatListData from '../../../data/Pontos/estacaoDoc';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles'

export default class PontosClick extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Informacoes";
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