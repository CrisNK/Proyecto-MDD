import axios from './root.service.js';

export async function CrearProducto(data) {
    try {
        const response = await axios.post('/productos/crearProducto',data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }

}

/*export async function ObtenerProductos() {
    try {
      const response = await axios.get('/productos/obtenerProductos');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }*/
