import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    ImageShow:{
        flex: 1,
        margin: 0,
        height: 300
    },
    Name:{
        flex:1, 
        padding:10, 
        fontSize:18, 
        color: 'black',
        fontSize:25,
        textAlign:'center',
        marginVertical:1,
        marginHorizontal:0,
        borderColor:'#F2F1EF',
        borderWidth: 2,
        borderStyle: 'solid',
        elevation:1,
    },
    CaixinhaInfo:{
        borderWidth:1,
        borderColor:'#4f2a99',
        backgroundColor: '#4f2a99',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal:10
    },
    CaixaDescricao:{
        borderWidth:1,
        borderColor:'#bdc3c7',
        marginTop:5
    },
    Descricao:{
        flex:1, 
        padding:20, 
        fontSize:18, 
        color:'black'
    },
    Estacionamento:{
        color:'white',
        fontSize:15,
        padding:0,
        flex:1,
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    EstacionamentoImage:{
        height:20,
        width:20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    Entrada:{

    },
    Horario:{
        height: 70
    },
    Lojas:{

    },
    SaibaMais:{
        textAlign:'center',
        fontSize:16
    },
    Solicitar:{
        height:50,
        width:'100%',
        marginBottom:7,
        marginHorizontal:'auto',
        backgroundColor:'#4f2a99',
        padding:10,
        elevation:1,
        borderColor:'#4f2a99',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
    }
})