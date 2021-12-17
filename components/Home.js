import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { getBusqueda } from '../api/api';
import Lista from './Lista';


const Home = () => {
    const [busqueda, setBusqueda] = React.useState('');
    const [yearBusqueda, setYearBusqueda] = React.useState('');
    const [dataList, setDataList] = React.useState([]);
    const [numPage, setNumePage] = React.useState(1);

    //----------------------------------------------------- datos de la busqueda de pagina, viene del componente Lista hijo
    const childToParent = (childdata) => {
        setNumePage(childdata);
    }


    //----------------------------------------------------- datos de la busqueda, utilizo para el componente Lista hijo
    const listar = async () => {
        const res = await getBusqueda(busqueda, yearBusqueda, numPage);
        setDataList(res);
    }



    //----------------------------------------------------- funcion que ejecuta la busqueda
    useEffect(() => {
        listar();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Input placeholder="Buscar Pelicula" onChangeText={(text) => setBusqueda(text)} />
                <Input placeholder="Año" onChangeText={(text) => setYearBusqueda(text)} />

                <Button title="Buscar" onPress={listar} />

                {/* envio de datos al hijo */}
                <Lista
                    data={dataList}
                    busqueda={busqueda}
                    year={yearBusqueda}
                    childToParent={childToParent}
                    getLista={listar}
                />
            </View>

        </View>
    )
}

export default Home