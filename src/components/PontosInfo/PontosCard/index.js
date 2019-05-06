import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

export default class PontosCard extends Component{
    render(){
        return(
            <View sytle={{
                flex:1,
                flexDirection:'column',
                borderRadius:3
            }}>
                <TouchableOpacity 
                style={styles.Card}
                onPress={() =>
                    this.props.navigation.push('PontosClick',{
                        urlPonto: '../../../data/Pontos/estacaoDoc.json'
                    })
                }>
                    <Image
                        source={{uri: this.props.item.imageUrl}}
                        style={styles.ImageCard}
                    />
                    <Text style={styles.Nome}>{this.props.item.name}</Text>
                    <Text style={styles.Descricao}>{this.props.item.foodDescription}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}