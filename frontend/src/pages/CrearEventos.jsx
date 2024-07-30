import Form from '../components/Form.jsx';
import { CrearEvento } from '../services/evento.service.js'

function Eventos(){
    const EnviarFormulario = async (data) => { // Define una funcion que recibe un parametro data
        try {
            await CrearEvento(data); // Llama a la funcion con el parametro data y espera a que se complete
            console.log('Evento Creado Existosamente');
        } catch (error) {
            console.error('Error al crear evento',error);
        }
    };
    return (
        <main className="container">
            
            <Form
                title="Crear Evento"
                fields={[
                    {
                        label: "Nombre del Evento",
                        name: "nombreEvento",
                        placeholder: "example",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Descripcion",
                        name: "descripcion",
                        placeholder: "breve descripcion del evento",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "Fecha",
                        name: "fecha",
                        placeholder: "YYYY-MM-DD",
                        type: "date",
                        required: true,
                    },
                    {
                        label: "Hora",
                        name: "hora",
                        placeholder: "HH:MM",
                        type: "time",
                        required: true,
                    },
                    {
                        label: "Cantidad de Emprendedores en el Evento",
                        name: "cantEmprendedores",
                        placeholder: "10",
                        type: "number",
                        required: true,
                    }, 
                    {
                        label: "Fecha Limite de Inscripcion",
                        name: "fechaLimiteInscripcion",
                        placeholder: "YYYY-MM-DD",
                        type: "date",
                        required: true,
                    },
                    {
                        label: "Ubicacion",
                        name: "ubicacion",
                        placeholder: "example",
                        type: "text",
                        required: true,
                    },
                ]}  
                buttonText="Crear"
                onSubmit ={EnviarFormulario}
            />
            

        </main>
    );
};

export default Eventos;