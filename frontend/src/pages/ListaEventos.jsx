import { useState, useEffect } from 'react';
import { ObtenerEventos } from '../services/evento.service.js';
import '../styles/verEventos.css';

function VerEventos() {
  const [eventos, setEventos] = useState([]); // Inicializa como un array vacío
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const result = await ObtenerEventos();
        setEventos(result.data); // Para el caso donde result.data resulte ser undefined
        console.log(eventos);
        setError(null);
      } catch (error) {
        setEventos([]);
      }
    };

    fetchEventos();
  }, []);



  return (
    <div className="body-verEvento">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Lista de Eventos</h1>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="container-verevento">
        {eventos.length > 0 ? (
          <ul>
            {eventos.map((evento) => (
              <li key={evento._id} className="row">
                <div className="vecol">
                  <p><b>Evento: </b>{evento.nombreEvento}</p>
                  <p><b>Descripción: </b> {evento.descripcion}</p>
                </div>
                <div className="vecol">
                  <p><b>Ubicacion: </b> {evento.ubicacion}</p>
                  <p><b>Fecha: </b> {new Date(evento.fecha).toLocaleDateString("es-ES", {year: "numeric", month: "2-digit", day: "2-digit",})}</p>
                </div>
                <div className="vecol">
                  <p><b>Hora: </b>{evento.hora}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (!error && <p>No se encontraron eventos.</p>)}
      </div>
    </div>
  );
}

export default VerEventos;