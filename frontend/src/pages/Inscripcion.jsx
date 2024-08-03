import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { postInscripcion } from "../services/inscripcion.service";
import Navbar from '../components/Navbar'

function Inscripcion()  {

    const navigate = useNavigate();
    const inscripcionSubmit = (data) => {
        console.log('Datos del formulario:', data); // Ver los datos del formulario
        postInscripcion(data).then(() => {
            setTimeout(() => {
                navigate('/');
            }, 1500);
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
        <Navbar/>
        <div className="form-InscribirEvento">
            <Form
                title="Inscripción"
                fields={[
                    {
                        label: "Nombre del evento",
                        name: "nombreEvento",
                        placeholder: "",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Id del evento",
                        name: "eventoId",
                        placeholder: "66ab10b1c459f7ffd5872ccd",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Nombre del emprendimiento",
                        name: "nombreEmprendimiento",
                        placeholder: "Los piriwines",
                        type: "text",
                        required: false,
                    },
                    {
                        label: "Nombre del emprendedor",
                        name: "nombreEmprendedor",
                        placeholder: "Nombre Apellido",
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
                    /*{
                        label: "Numero de contacto",
                        name: "numeroContacto",
                        placeholder: "9XXXXXXXX",
                        type: "number",
                        required: true,
                    },*/
                ]}
                buttonText="Inscribirme"
                onSubmit={inscripcionSubmit}
            />
        </div>
        </>
    )
}

export default Inscripcion;