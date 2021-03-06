import React, { Component } from 'react';

import { View } from 'react-native';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import PontosInfo from '../PontosInfo';
import uberx from '../../assets/uberx.png';
import fullGuide from '../../assets/fullGuide.png'
import teller from '../../assets/teller.png'



export default class Details extends Component{
    constructor(props) {
        super(props);
    }



    render(){
        const {navigate} = this.props.navigation;
        const {destination} = this.props.destination;
        if(this.props.duration){
            const {duration} = this.props.duration;
            console.log('Details: ', this.props);
            var tarifaFG = this.props.duration * 2;
            var tarifaT = this.props.duration * 1;
        }

        return(
        <Container>
            <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TypeTitle style={{color: "#6D3BD2"}}>Full-Guide</TypeTitle>
                    <TypeDescription>Seu guia passeia com você</TypeDescription>
                    <TypeImage source={fullGuide}></TypeImage>
                    <TypeDescription>R${tarifaFG}</TypeDescription>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TypeTitle style={{color: "#6D3BD2"}}>Teller</TypeTitle>
                    <TypeDescription>Ouça histórias do local até o destino</TypeDescription>
                    <TypeImage source={teller}></TypeImage>
                    <TypeDescription>R${tarifaT}</TypeDescription>
                </View>
            </View>
            <RequestButton style={{backgroundColor: "#6D3BD2"}} onPress={() => this.props.navigation.navigate('PontosPage', this.props.destination.title)}>
                <RequestButtonText>Solicitar Mercurio</RequestButtonText>
            </RequestButton>
        </Container>
        );
    }
}

//<RequestButton onPress={() => this.props.navigation.navigate('PontosPage', this.props.destination.title)}></RequestButton>