import axios from './root.service';

export async function CrearEvento(data){
    try {
        const response = await axios.post('/evento/crearevento',data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}
export async function ObtenerEventos() {
    try {
      const response = await axios.get('/evento/obtener');
      console.log(response);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }