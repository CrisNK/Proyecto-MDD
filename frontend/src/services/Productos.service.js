import axios from './root.service.js';
import { showSuccessAlertProduct, showErrorAlertProduct } from '../helpers/alert.js';

export async function CrearProducto(data) {   
  try {
        const response = await axios.post('/producto/crear', data);
        const {status} = response;
        if(status === 201){
          showSuccessAlertProduct();
      }else{
        showErrorAlertProduct();
      }
        return response;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function ObtenerProductos() {
    try {
      const response = await axios.get('/producto/ObtenerTodos');
      const {status} = response;
      if(status === 200){
        console.log(response.data);
      } else{
        console.log('Error al obtener productos');
      }
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };
