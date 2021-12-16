import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { stylesContainer } from '../styles/styles';


const Lista = ({ data }) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    let resultado = data.data ? data.data.Search : [];
    let busquedaTotal = data.data? data.data.totalResults : 'No hay resultados';

    const navigation = useNavigation();

    const renderResultado = (({ item }) =>
        <TouchableOpacity onPress={() => navigation.navigate('Detalles', { item })}>

            <Card>
                <View style={stylesContainer.container} >
                    <Image
                        source={{ uri: item.Poster ? item.Poster : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png' }}
                        style={stylesContainer.imgContainer}
                    />
                </View>

                {/* <Text>{item.Title}</Text> */}
                <Card.Title>{item.Title} ({item.Year})</Card.Title>
            </Card>
        </TouchableOpacity>
    );

    


    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);

        console.log("datas...")
        console.log(currentPage)
    };

    

    useEffect(() => {
        loadMoreItem();
    }, []);


    return (
        <View>
        <Text style={stylesContainer.titleText}>Resultado de busqueda: { busquedaTotal}</Text> 
            <FlatList
            data={resultado}
            renderItem={renderResultado}
            keyExtractor={(item) => item.imdbID}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0.5}
        />
        </View>
        
    )
}

export default Lista