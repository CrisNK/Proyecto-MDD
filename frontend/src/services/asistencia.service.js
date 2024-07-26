import axios from './root.service.js';
import { showSuccessAlert, showErrorAlert } from '../helpers/alert.js';
// Holaaaa
export async function postAsistencia(data) {
    try {
        const response = await axios.post('/asistente/registrarAsistencia', data);
        const { status } = response;

        if (status === 201) {
            showSuccessAlert();
        } else {
            showErrorAlert();
        }

        return response;
    } catch (error) {
        console.error('Error:', error);
        showErrorAlert();
        throw error.response?.data || error.message;
    }
}