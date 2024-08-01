import axios from './root.service.js';
import { ShowCreateEventAlert, showErrorCreateEventAlert } from '../helpers/alert.js';


export async function CrearEvento(data){
    try {
        const response = await axios.post('/evento/crearevento',data);
        const { status } = response;
        if(status === 201){
            ShowCreateEventAlert();
        }else{
            showErrorCreateEventAlert();
        }

        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
// Configura Axios para desactivar la caché
export const ObtenerEventos = async () => {
    try {
        const response = await axios.get('/evento/obtener', {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


  export async function modificarEventos(data) {
    try {
      console.log('Enviando datos:', data);
      const response = await axios.put(`/evento/update/${data.eventoID}`,data);      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }