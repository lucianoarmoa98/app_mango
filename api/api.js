import axios from "axios";

const API_KEY = "&apikey=66818d24";

//------------------------------------------------------------------------------servicio de busqueda de peliculas
export const getBusqueda = (busqueda, yearBusqueda, numPage) => {
    return new Promise((resolve, reject) => {
        axios({
            url: `http://www.omdbapi.com/?s=${busqueda}&y=${yearBusqueda}&page=${numPage}` + API_KEY,
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject('Failed al obtener la lista de peliculas');
            });
    });
};

//----------------------------------------------------------------------------servicio para obtener la lista de peliculas por Id
export const getDetalles = (imdbID) => {
    return new Promise((resolve, reject) => {
        axios({
            url: `http://www.omdbapi.com/?i=${imdbID}` + API_KEY,
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject('Failed al obtener la lista de peliculas');
            });
    });
};