import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import EstacaoDocas from '../../assets/EstacaoDocas.jpeg';

import firebase from 'react-native-firebase';




const styles = StyleSheet.create({
    texto: {
        fontSize: 19,
    }
  });

export default class PontosInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
      var config = {
          apiKey: "AIzaSyCdTA1vFufG-ri2_pPy2dEkKgcNum-iong",
          authDomain: "mercuriopi3.firebaseapp.com",
          databaseURL: "https://mercuriopi3.firebaseio.com",
          projectId: "mercuriopi3",
          storageBucket: "mercuriopi3.appspot.com",
          messagingSenderId: "896515964296"
        };
        firebase.app();
        firebase.database().ref('pontos').on('value', (data) => {
          console.log(data.toJSON());
      })
      console.log('FB ', firebase);
  }

  render() {
    console.log('Pontos Info: ', this.props.navigation.state.params);
    return(<View>
        <Text style={styles.texto}>
            {this.props.navigation.state.params}
        </Text>
        <Text style={styles.texto}>
            
        </Text>
        <Image source={EstacaoDocas} 
        resizeMode='contain'
        style={{maxWidth:'100%', maxHeight:300}}/>
        <Text style={styles.texto}>
            História: Inaugurada em 13 de maio de 2000, a Estação das Docas é um dos espaços que mais refletem a região amazônica. Referência nacional, o complexo turístico e cultural congrega gastronomia, cultura, moda e eventos nos 500 metros de orla fluvial do antigo porto de Belém. São 32 mil metros quadrados divididos em três armazéns e um terminal de passageiros.

O Armazém 1 foi batizado de Boulevard das Artes. O Armazém 2 passou a ser o Boulevard da Gastronomia. E o Armazém 3 é conhecido como Boulevard das Feiras e Exposições. O complexo possui, ainda, o Teatro Maria Silvia Nunes e o anfiteatro do Forte de São Pedro Nolasco.

Detalhes Históricos
Os Boulevares foram resultado de um cuidadoso trabalho de restauração dos armazéns do porto da capital paraense. Os três galpões de ferro inglês são um exemplo da arquitetura característica da segunda metade do século XIX.

Os guindastes externos, marcas registradas da Estação, foram fabricados nos Estados Unidos, no começo do século 20. Já a máquina a vapor em meados de 1800, fornecia energia para os equipamentos do porto.

As ruínas do Forte de São Pedro Nolasco, onde foi construído um Anfiteatro, foram originalmente construídas para a defesa da orla em 1665. O espaço foi destruído após o Movimento da Cabanagem, em 1825, e revitalizado para a inauguração da Estação.
        </Text>
        

    </View>);
  }
}
