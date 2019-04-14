import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    state = {
        searchFocused: false,
    }
    
    render(){
        const { searchFocused } = this.state;
        const { onLocationSelected } = this.props;
        
        return <GooglePlacesAutocomplete
            placeholder='Para onde vamos?'
            placeholderTextColor='#6D3BD2'
            onPress={onLocationSelected}
            query={{
                key: 'AIzaSyDfk76azc4xYaHTfdqY0JmtlE-Ks4GMu1A',
                language: 'pt'
            }}
            textInputProps={{
                onFocus: () => { this.setState({searchFocused: true})},
                onBlur: () => { this.setState({searchFocused: false})},
                autoCapitalize: 'none',
                autoCorrect: false
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: '10%',
                    width:'100%',
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 0,
                    paddingTop:0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight:0,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x:0, y:0 },
                    shadowRadius: 15,
                    borderWidth: 0.5,
                    borderColor: '#6D3BD2',
                    fontSize: 18,
                    color: '#6D3BD2',
                    borderRadius: 20,

                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#ddd',
                    backgroundColor: '#fff',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x:0, y:0},
                    shadowRadius: 15,
                    marginTop: 10
                },
                description: {
                    fontSize: 16,
                },
                row: {
                    padding: 20,
                    height: 58
                },
            }}
        />;
    }
}