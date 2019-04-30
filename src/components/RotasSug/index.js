import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class RotasSug extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Rotas Sugeridas";
        return { headerTitle }
    }
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
    }

    render(){
        console.log('RotasSug: params', this.props.navigation.state.params);
        return(
            <View style={{
                flex: 1,
                alignItems:'center',
                justifyContent: 'center'
            }}>
                <Text>Rotas Sugeridas</Text>

            </View>
        )
    }
}