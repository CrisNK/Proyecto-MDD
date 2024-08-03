import { useState, useEffect } from 'react';
import { ObtenerInscripciones } from '../services/eliminarInscripcion.service.js'; // Asegúrate de que la ruta sea correcta
import '../styles/eventos.css';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';

function VerInscripciones() {
    const [inscripciones, setInscripciones] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInscripciones = async () => {
            try {
                const result = await ObtenerInscripciones();
                setInscripciones(result.data.data);
                setError(null);
            } catch (error) {
                console.error('Error al obtener inscripciones:', error);
                setInscripciones([]);
                setError('Error al obtener inscripciones');
            }
        };

        fetchInscripciones();
    }, []);

    return (
        <div>
            <Navbar isHomePage={false} />
            <h2 className='results'>Mis Inscripciones a Eventos</h2>
            {error && <p className="error-message">{error}</p>}
            <div className='background-results-events'>
                {inscripciones.length > 0 ? (
                    <ul>
                        {inscripciones.map((inscripcion) => (
                            <li className='event-founded' key={inscripcion._id}>
                                <h2 className='title'>{inscripcion.nombreEvento}</h2>
                                <img src='https://lh4.googleusercontent.com/proxy/En76-vkgHMKUZ1G7fVkZmQrKZgna3vcQ4yHNsMUwdGysOnV_9E-9bF_ZoKk3tqLEKVK4f4PJSaZbNo6xXOgfmf33ubQckDuIr1L5YhyAvIrKXpQ' alt='Imagen del evento'></img>
                                <h4>Emprendimiento:</h4>
                                <p>{inscripcion.nombreEmprendimiento}</p>
                                <h4>Emprendedor:</h4>
                                <p>{inscripcion.nombreEmprendedor}</p>
                                <h4>Email de Contacto:</h4>
                                <p>{inscripcion.email}</p>
                                <h4>Número de Contacto:</h4>
                                <p>{inscripcion.numeroContacto}</p>
                                <button>Cancelar Inscripción</button>
                            </li>
                        ))}
                    </ul>
                ) : (!error && <p>No tienes inscripciones a eventos.</p>)}
            </div>
        </div>
    );
};

export default VerInscripciones;
