import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

//import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
    texto: {
        fontSize: 19,
    }
  });

export default class PontosInfo extends Component {
    constructor(props) {
        super(props);
    }
    /*componentWillMount(){
        var config = {
            apiKey: "AIzaSyCdTA1vFufG-ri2_pPy2dEkKgcNum-iong",
            authDomain: "mercuriopi3.firebaseapp.com",
            databaseURL: "https://mercuriopi3.firebaseio.com",
            projectId: "mercuriopi3",
            storageBucket: "mercuriopi3.appspot.com",
            messagingSenderId: "896515964296"
          };
        firebase.initializeApp(config);
        console.log('FB ', firebase);
    }*/

  render() {
    console.log('Pontos Info: ', this.props.navigation.state.params);
    return(<View>
        <Text style={styles.texto}>
            Seu ponto é: {this.props.navigation.state.params}
        </Text>
        <Text style={styles.texto}>
            História:
        </Text>
        <Text style={styles.texto}>
            Fotos:
        </Text>

    </View>);
  }
}


