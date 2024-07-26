import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { postAsistencia } from '../services/asistencia.service';
import '../styles/form.css'
function Inscripcion() {
    const navigate = useNavigate();

    const asistenciaSubmit = async (data) => {
        try {
            const response = await postAsistencia(data);
            if (response && response.status === 201) {
                setTimeout(() => {
                    navigate('/');
                }, 1600);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='form-container'>
            <Form
                title="Asistencia a evento"
                fields={[
                    {
                        label: "Id del evento",
                        name: "eventoID",
                        placeholder: "Identificador del evento",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Correo electrónico",
                        name: "email",
                        placeholder: "example@gmail.com",
                        type: "email",
                        required: true,
                    },
                    {
                        label: "Numero de contacto",
                        name: "numeroContacto",
                        placeholder: "9 93730784",
                        type: "text",
                        required: true,
                    },
                ]}
                buttonText="Inscribirme"
                onSubmit={asistenciaSubmit}
            />
        </div>
    );
}

export default Inscripcion;