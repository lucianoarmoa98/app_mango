import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';


const Lista = ({ data }) => {
    let resultado = data.data ? data.data.Search : [];

    const navigation = useNavigation();

    const renderResultado = (({ item }) =>
        <TouchableOpacity onPress={() => navigation.navigate('Detalles', {item})}>
            <Image 
                source={{uri: item.Poster ? item.Poster: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'}}
                style={{height: 180, width: 180}}
            />
            <Text>{item.Title}</Text>
        </TouchableOpacity>
    );

    console.log("datos de apissss");
    console.log(data)
    //console.log(dataList.data ? dataList.data.Search: [])
    return (
        <View>
            <View>
                <FlatList
                    data={resultado}
                    renderItem={renderResultado}
                    keyExtractor={(item) => item.imdbID}
                />
            </View>

        </View>
    )
}

export default Lista