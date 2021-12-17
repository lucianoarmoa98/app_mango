import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, Card, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { stylesContainer } from '../styles/styles';


const Lista = ({ data, childToParent, getLista }) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    let resultado = data.data ? data.data.Search : [];
    let busquedaTotal = data.data ? data.data.totalResults : 'No hay resultados';


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
                <Card.Title>{item.Title} ({item.Year})</Card.Title>
            </Card>
        </TouchableOpacity>
    );


    //------------------------------------------------recargar la pagina
    const loadPage = () => {
        setCurrentPage(currentPage + 1);
        childToParent(currentPage);
        getLista();
    };

    //------------------------------------------------- actualizar la lista
    useEffect(() => {
        getLista();
    }, []);



    return (
        //----------------------- colocar en el view, el estilo flex: 1, para usar flatlist y poder usar el scroll
        <View style={{ flex: 1 }}>
            <Text style={stylesContainer.textBusqueda}>Resultado de busqueda: {busquedaTotal}</Text>
            <FlatList
                data={resultado}
                renderItem={renderResultado}
                keyExtractor={(item) => String(item.imdbID)}
                onEndReached={loadPage}
                onEndReachedThreshold={0.5}
            />
        </View>

    )
}

export default Lista