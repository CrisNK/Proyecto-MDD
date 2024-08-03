import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { modificarEventos } from '../services/evento.service';
import '../styles/form.css'
import {showConfirmModEventAlert, showSuccessModEventAlert, showErrorModEventAlert, showInfoModEventAlert } from '../helpers/alert.js';
import NavBar from '../components/Navbar.jsx'
function EditarEvento() {
        const navigate = useNavigate();
        const modificaciones = (data) => {
          showConfirmModEventAlert(
            async () => {
              try {
                const response = await modificarEventos(data);
                if (response && response.status === 200) {
                    showSuccessModEventAlert().then(() => {
                      navigate('/home');
                  });
                }
              } catch (error) {
                console.error('Error:', error);
                showErrorModEventAlert(error.message);
              }
            },
            () => {
                showInfoModEventAlert().then(() => {
                  navigate('/home');
              });
            }
          );
        };

    return(
          <div className='form-container'>
              <Form
                  title= "Modificar Evento"
                  fields={[
                      {
                          label: "ID de evento a modificar",
                          name: "eventoID",
                          placeholder: "111111111111111111111111",
                          type: "text",
                          required: true,
                      },
                      {
                          label: "Nombre del Evento",
                          name: "nombreEvento",
                          placeholder: "Evento de prueba",
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
                          placeholder: "nueva cantidad de emprendedores",
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
                          placeholder: "nueva ubicación",
                          type: "text",
                          required: true,
                      },
                  ]}
                  buttonText="Guardar"
                  onSubmit={modificaciones}
              />
          </div>
    );
}

export default EditarEvento;