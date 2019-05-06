import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';

import flatListData from '../../data/flatListData';
import FlatListItem from './PontosCard';

export default class PontosInfo extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Pontos turísticos";
        return { headerTitle }
    }
    render(){
        return(
            <View style={{flex: 1,marginTop: 2}}>
                <FlatList 
                data={flatListData}
                renderItem = {({item, index})=>{
                    return(
                        <FlatListItem 
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