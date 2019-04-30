import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View, Image} from 'react-native';
import PontosPNG from "../../assets/pontos.png"
import RotasPNG from "../../assets/rotas.png"

export default class Turismo extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = null;
        return { headerTitle }
    }
    render(){
        return(
            <View style={styles.viewprop}>
                <View style={styles.viewbutton}>
                <Image source={PontosPNG} style={styles.imagens}/>
                <Button color="#6032bc" navigation={this.props.navigation} title="Pontos turísticos" onPress={() =>
                    this.props.navigation.push('PontosPage')
                }
                />
                </View>
                <View style={styles.viewbutton}>
                <Image source={RotasPNG} style={styles.imagens}/>
                <Button color="#6032bc" title="Rotas sugeridas" onPress={() => 
                    this.props.navigation.push('RotasSug')
                }/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewprop:{
        backgroundColor: '#6D3BD2',
        flex: 1,
        alignItems:'center',
        flexDirection: 'column',
    },
    buttonprop:{
        backgroundColor: "#FF0000"
    },
    viewbutton: {
        padding: 50,
        marginTop: 100,
        alignItems:'center',
        flexDirection: 'column',
    },
    imagens:{
        width: 100, height: 100
    }
});