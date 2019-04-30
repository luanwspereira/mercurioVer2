import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View, Container} from 'react-native';

export default class Turismo extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = null;
        return { headerTitle }
    }
    render(){
        return(
            <View style={styles.viewprop}>
                <Button color="#6032bc" navigation={this.props.navigation} title="Pontos turísticos" onPress={() =>
                    this.props.navigation.push('PontosPage')
                }/>

                <Button color="#6032bc" title="Rotas sugeridas" onPress={() => 
                    this.props.navigation.push('RotasSug')
                }/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewprop:{
        backgroundColor: '#6D3BD2',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonprop:{
        backgroundColor: "#FF0000"
    }
});