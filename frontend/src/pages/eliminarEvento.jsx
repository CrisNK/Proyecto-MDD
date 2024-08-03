import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { eliminarEvento } from '../services/evento.service';
import '../styles/form.css'
import { showDeletedEventAlert, showSuccessDeletedAlert, showInfoDeletedAlert } from '../helpers/alert.js';

function EliminarEvento() {
    const navigate = useNavigate();

    const eventoEliminado = async (data) => {
        try {
            const result = await showDeletedEventAlert();
            if (result.isConfirmed) {
                try {
                    await eliminarEvento(data);
                    showSuccessDeletedAlert().then(() => {
                            navigate('/');
                    });
                } catch (error) {
                    console.error('Error:', error);
                    // Manejo de errores si es necesario
                }
            } else if (result.isDismissed) {
                showInfoDeletedAlert().then(() => {
                        navigate('/');
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='form-container'>
            <Form
                title="Eliminar Evento"
                fields={[
                    {
                        label: "ID de evento a eliminar",
                        name: "eventoID",
                        placeholder: "111111111111111111111111",
                        type: "text",
                        required: true,
                    },
                ]}
                buttonText="Eliminar"
                onSubmit={eventoEliminado}
            />
        </div>
    );
}

export default EliminarEvento;