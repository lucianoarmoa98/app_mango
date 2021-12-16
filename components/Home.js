import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { getBusqueda } from '../api/api';
import Lista from './Lista';


const Home = (props) => {
    const [busqueda, setBusqueda] = React.useState('');
    const [yearBusqueda, setYearBusqueda] = React.useState('');
    const [dataList, setDataList] = React.useState([]);

    const listar = async () => {
        const res = await getBusqueda(busqueda, yearBusqueda);
        // console.log("datos de apis");
        // console.log(res);
        setDataList(res);
    }

    // console.log("datos de apissss");
    // console.log(dataList.data ? dataList.data.Search: [])



    useEffect(() => {
        listar();
    }, []);

    return (
        <View>
            <View >
                <Text h1>Inicio </Text>
                <Input placeholder="Buscar Pelicula" onChangeText={(text) => setBusqueda(text)} />
                <Input placeholder="Año" onChangeText={(text) => setYearBusqueda(text)} />

                <Button title="Buscar" onPress={listar} />

                <Lista data={dataList}/>
            </View>

        </View>
    )
}

export default Home