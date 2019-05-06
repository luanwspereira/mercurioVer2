import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';

import pontosData from '../../data/pontosData';
import PontosCard from './PontosCard';

export default class PontosInfo extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Pontos turísticos";
        return { headerTitle }
    }
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor:'#6d3bd2'
            }}>
                <FlatList 
                data={pontosData}
                renderItem = {({item, index})=>{
                    return(
                        <PontosCard 
                            item={item} 
                            index={index}
                            navigation={this.props.navigation}
                        />
                        
                    )
                }}>
                </FlatList>
            </View>
        )
    }
}