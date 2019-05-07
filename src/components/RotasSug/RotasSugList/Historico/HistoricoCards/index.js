import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

export default class FlatListItem extends Component{
    render(){
        return(
            <View sytle={{
                flex:1,
                flexDirection:'column',
            }}>
                <TouchableOpacity 
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#6D3BD2',
                }}
                onPress={() =>this.props.navigation.push('PontosClick', this.props.item)}>
                
                    <Image
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}/>
                    <View style={{
                        flex:1,
                        flexDirection:'column'
                    }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.descricao}</Text>
                    </View>
                </TouchableOpacity>
                {/* Linha divisoria dos cards abaixo */}
                <View style={{
                    height: 1,
                    backgroundColor:'#6D3BD2'
                }}/>
            </View>
        )
    }
}