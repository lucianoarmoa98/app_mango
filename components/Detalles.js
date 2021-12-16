import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getDetalles } from '../api/api';


const Detalles = ({route}) => {
    const [details, setDetails] = React.useState([]);

    const {imdbID} = route.params.item;

    const infoMovie = async () => {
        const res = await getDetalles(imdbID);
        // console.log("datos de apis");
        // console.log(res);
        setDetails(res);
    }

    useEffect(() => {
        infoMovie();
    }, []);

    console.log(details.data);

    return (
        <View>
            <View>
                <Text h1>Detalles </Text>
            </View>
                
        </View>
    )
}

export default Detalles