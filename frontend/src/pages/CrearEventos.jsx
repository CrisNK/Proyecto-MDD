import Form from '../components/Form.jsx';
import { CrearEvento } from '../services/evento.service.js'

function Eventos(){
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
                onSubmit ={CrearEvento}
            />
            

        </main>
    );
};

export default Eventos;