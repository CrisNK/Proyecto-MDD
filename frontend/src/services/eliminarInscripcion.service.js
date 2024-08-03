import axios from './root.service.js';


export const ObtenerInscripciones = async () => {
    try {
        const response = await axios.get('/inscripciones/visualizar', {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};