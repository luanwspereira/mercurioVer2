import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    Nome:{
        flex:1,
        color: 'black',
        padding:10,
        paddingBottom: 1,
        fontSize: 21,
        textAlign: 'center',
    },  

    Descricao:{
        flex:1,
        color: 'black',
        paddingTop: 1,
        padding:10,
        fontSize: 16,
        textAlign: 'center',
    }, 
    

    Card:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        margin: 15,
        elevation:1,
        borderColor:'#4f2a99',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        color:'#ffffff'

    },

    ImageCard:{
        flex: 1,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        margin: 0,
        height: 220,
        backgroundColor: '#4f2a99'
    }
})