import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { postInscripcion } from "../services/inscripcion.service";

function Inscripcion()  {

    const navigate = useNavigate();

    const inscripcionSubmit = (data) => {
        console.log('Datos del formulario:', data); // Ver los datos del formulario
        postInscripcion(data).then(() => {
            navigate('/');
        }).catch((error) => {
            // Verificar el contenido del error
            console.error('Error en la inscripción:', error);
            // Verificar si el mensaje de error contiene información específica
            if (error.response && error.response.data) {
                console.error('Detalles del error:', error.response.data);
            }
        });
    };
    return (
        <>
            <Form
                title="Inscripción"
                fields={[
                    {
                        label: "Nombre del evento",
                        name: "nombreEvento",
                        placeholder: "Eventoo",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Nombre del emprendimiento",
                        name: "nombreEmprendimiento",
                        placeholder: "Los piriwines",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Nombre del emprendedor",
                        name: "nombreEmprendedor",
                        placeholder: "El piriwin",
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
                        placeholder: "Los piriwines",
                        type: "number",
                        required: true,
                    },
                    {
                        label: "Id del evento",
                        name: "eventoId",
                        placeholder: "0123012030",
                        type: "text",
                        required: true,
                    },
                    
                ]}
                buttonText="Inscribirme"
                onSubmit={inscripcionSubmit}
            />
        </>
    )
}

export default Inscripcion;