import Form from '../components/Form';
import { CrearEvento } from '../services/evento.service.js'

function Evento(){
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
                ]}  
            />
            

        </main>
    );
};

export default Evento;