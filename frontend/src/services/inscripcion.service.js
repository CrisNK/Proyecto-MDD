import axios from './root.service.js';
import { showSuccessAlert, showErrorAlert, noEncontrado } from '../helpers/alert.js';

export async function postInscripcion(data) {
    try {
        console.log('Enviando datos:', data); // Agregar esto para ver los datos que se envían
        const response = await axios.post('/inscripciones/inscribir', data);
        console.log('Respuesta del servidor:', response);
        const { status } = response;
        

        if (status === 201) {
            showSuccessAlert();
        } else{
            showErrorAlert();
        }

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        if(error.response.status === 400){
            noEncontrado();
        } else{
            showErrorAlert();
        }
        throw error.response?.data || error.message;
    }
}

