import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


import rotasListData from '../../data/rotasListData';
import FlatListItem from './RotasSugCards';

export default class RotasSug extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Rotas Sugeridas";
        return { headerTitle }
    }
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        console.log(rotasListData);
    }

    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor:'#6d3bd2'
            }}>
                <FlatList 
                data={rotasListData}
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

const styles = StyleSheet.create({
    viewprop:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#6D3BD2'
    }});