import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { getDetalles } from '../api/api';
import { stylesContainer } from '../styles/styles';


const Detalles = ({ route }) => {
    const [details, setDetails] = React.useState([]);

    const { imdbID } = route.params.item;
    let dataRating = details.data ? details.data.Ratings : [];

    // console.log("rentin")
    // console.log(dataRating)

    const infoMovie = async () => {
        const res = await getDetalles(imdbID);
        // console.log("datos de apis");
        // console.log(res);
        setDetails(res);
    }

    useEffect(() => {
        infoMovie();
    }, []);

    console.log("informacion...")
    console.log(details.data);

    return (
        <View>
            
            <Card>
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