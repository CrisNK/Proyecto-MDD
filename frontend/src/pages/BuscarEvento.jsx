import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BuscarEventos as BuscarEventosAPI } from '../services/evento.service.js'
import '../styles/eventos.css'
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';

function BuscarEventos() {
    const { nombreEvento } = useParams(); // Obtiene el término de búsqueda de la URL
    const [eventos, setEventos] = useState([]); // Inicializa como un array vacío
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            if (nombreEvento) {
                try {
                    const result = await BuscarEventosAPI(nombreEvento);
                    setEventos(result.data); // Para el caso donde result.data resulte ser undefined
                    setError(null);
                } catch (error) {
                    console.error('Error al buscar eventos:', error);
                    setEventos([]);
                    setError('Error al buscar eventos');
                }
            }
        };

        fetchEventos();
    }, [nombreEvento]);
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Los meses son 0-indexados
        const year = date.getUTCFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div>
            <Navbar isHomePage={true} />
            <h2 className='results'>Resultados de búsqueda para: "{nombreEvento}"</h2>
            {error && <p className="error-message">{error}</p>}
            <div className='background-results-events'>
                {eventos.length > 0 ? (
                    <ul>
                        {eventos.map((evento) => (
                            <li className='event-founded' key={evento._id}>
                                <h2 className='title'>{evento.nombreEvento}</h2>
                                <img src='https://via.placeholder.com/470x300'></img>
                                <h4>Descripción:</h4>
                                <p>{evento.descripcion}</p>
                                <h4>Fecha del evento:</h4>
                                <p>{formatDate(evento.fecha)}</p>
                                <h4>Hora:</h4>
                                <p>{evento.hora}</p>
                                <h4>Fecha límite de inscripciones:</h4>
                                <p>{formatDate(evento.fechaLimiteInscripcion)}</p>
                                <h4>Ubicación:</h4>
                                <p>{evento.ubicacion}</p>
                                <Link to={`/asistencia/${evento._id}`}><button>Asistiré</button></Link>
                            </li>
                        ))}
                    </ul>
                ) : (!error && <p>No se encontraron eventos.</p>)}
            </div>
        </div>
    );
};

export default BuscarEventos;