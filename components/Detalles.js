import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { getDetalles } from '../api/api';
import { stylesContainer } from '../styles/styles';


const Detalles = ({ route }) => {
    const [details, setDetails] = React.useState([]);

    // -------------------------------datos que envia la ruta por params
    const { imdbID } = route.params.item;
    let dataRating = details.data ? details.data.Ratings : [];


    //-------------------------------funcion que obtiene los detalles de la pelicula
    const infoMovie = async () => {
        const res = await getDetalles(imdbID);
        setDetails(res);
    }

    //-------------------------------useEffect que ejecuta la funcion infoMovie
    useEffect(() => {
        infoMovie();
    }, []);

    

    return (
        <View>

            <Card>
                {/*------------------------- Vista de Imagen con titulo -------------------------*/}
                <View style={stylesContainer.container} >
                    <Image
                        source={{ uri: details.data ? details.data.Poster : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png' }}
                        style={stylesContainer.imgContainer}
                    />

                </View>
                <Card.Title>{details.data ? details.data.Title : ''}</Card.Title>

                {
                    dataRating ? dataRating.map((row) => (
                        <View>
                            <Text style={stylesContainer.titleText}>Rating: {row ? row.Source : ''}</Text>
                            <Text>{row ? row.Value : ''}</Text>
                        </View>
                    ))
                        : ''
                }

                {/* ------------------------texto de detalles------------------------------- */}
                <Text style={stylesContainer.titleText}>Descripción:</Text>
                <Text>{details.data ? details.data.Plot : ''}</Text>
                <Text style={stylesContainer.titleText}>Director:</Text>
                <Text>{details.data ? details.data.Director : ''}</Text>
                <Text style={stylesContainer.titleText}>Actores:</Text>
                <Text>{details.data ? details.data.Actors : ''}</Text>
            </Card>

        </View>
    )
}

export default Detalles