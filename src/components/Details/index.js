import React, { Component } from 'react';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles'

import uberx from '../../assets/uberx.png';

export default class Details extends Component{
    render(){
        return <Container>
            <TypeTitle>Popular</TypeTitle>
            <TypeDescription>Viagens baratas para o dia-a-dia</TypeDescription>
            <TypeImage source={uberx}></TypeImage>
            <TypeTitle>Mercurio</TypeTitle>
            <TypeDescription>¥52.00</TypeDescription>

            <RequestButton onPress={()=>{}}>
                <RequestButtonText>Solicitar Mercurio</RequestButtonText>
            </RequestButton>
            
        </Container>
    }
}