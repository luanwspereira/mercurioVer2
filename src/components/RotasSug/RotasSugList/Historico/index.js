import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


import rotahistorica from '../../../../data/rotahistorica';
import FlatListItem from './HistoricoCards';

export default class Historico extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Rotas Sugeridas";
        return { headerTitle }
    }
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        console.log(rotahistorica);
    }

    render(){
        return(
            <View style={{
                flex: 1,
                marginTop: 2
            }}>
                <FlatList 
                data={rotahistorica}
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