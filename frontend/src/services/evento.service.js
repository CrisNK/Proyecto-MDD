import axios from './root.service.js';

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
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

export async function modificarEventos(data) {
    try {
      console.log('Enviando datos:', data);
      const response = await axios.put(`/evento/update/${data.eventoID}`,data);      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
}

export async function BuscarEventos(nombreEvento) {
  try {
    const response = await axios.get(`/evento/buscar/${nombreEvento}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message || "Error desconocido.");
    }
  } catch (error) {
    throw error.response?.data || error.message;
  }
}