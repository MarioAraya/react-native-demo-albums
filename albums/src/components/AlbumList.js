import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => console.log(res));
    }

    render() {
        return (
            <View>
                <Text>Album list!!!</Text>
            </View>
        );
    }
}

export default AlbumList;