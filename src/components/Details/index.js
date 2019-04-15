import React, { Component } from 'react';

import { View } from 'react-native';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles'

import uberx from '../../assets/uberx.png';
import fullGuide from '../../assets/fullGuide.png'
import teller from '../../assets/teller.png'


export default class Details extends Component{
    render(){
        return <Container>
            
            <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TypeTitle>Popular</TypeTitle>
                    <TypeDescription>Viagens do dia-a-dia</TypeDescription>
                    <TypeImage source={uberx}></TypeImage>
                    <TypeTitle>Popular</TypeTitle>
                    <TypeDescription>¥52.00</TypeDescription>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TypeTitle>Full-Guide</TypeTitle>
                    <TypeDescription>Seu guia passear com você</TypeDescription>
                    <TypeImage source={fullGuide}></TypeImage>
                    <TypeTitle>Full-Guide</TypeTitle>
                    <TypeDescription>¥52.00</TypeDescription>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TypeTitle>Teller</TypeTitle>
                    <TypeDescription>Ouça histórias do local até o destino</TypeDescription>
                    <TypeImage source={teller}></TypeImage>
                    <TypeTitle>Teller</TypeTitle>
                    <TypeDescription>¥52.00</TypeDescription>
                </View>
            </View>
            <RequestButton onPress={()=>{}}>
                <RequestButtonText>Solicitar Mercurio</RequestButtonText>
            </RequestButton>

        </Container>
        
    }
}