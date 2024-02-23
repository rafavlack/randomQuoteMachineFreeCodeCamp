
import axios from 'axios';

export async function obtenerFrase(id) {
    try {
        const respuesta = await axios.get(`https://apifrases.esmeldy.com/api/frases/${id}`);
        return respuesta.data;
    } catch (error) {
        console.error(`Error al obtener la frase: ${error}`);
    }
}



export async function obtenerPerro() {
    try {
        const respuesta = await axios.get(`https://dog.ceo/api/breeds/image/random`);
        return respuesta.data;
    } catch (error) {
        console.error(`Error al obtener la frase: ${error}`);
    }
}
