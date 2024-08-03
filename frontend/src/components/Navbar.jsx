import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { logout } from '../services/auth.service.js';

const Navbar = ({ isHomePage }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [storedUser, setStoredUser] = useState(JSON.parse(sessionStorage.getItem('usuario')));
    const [nombreEvento, setNombreEvento] = useState('');
    const userRole = storedUser?.data?.rolName;

    const logoutSubmit = () => {
        try {
            logout();
            sessionStorage.removeItem('usuario');
            setStoredUser(null);
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const handleInputChange = (event) => {
        setNombreEvento(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el envío por defecto del formulario
        if (nombreEvento.trim()) {
            navigate(`/evento/buscar/${encodeURIComponent(nombreEvento)}`); // Redirige usando el valor del input
        }
    };

    useEffect(() => {
        setStoredUser(JSON.parse(sessionStorage.getItem('usuario')));
    }, [location]);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img
                        src="/cohete.png"
                        alt="Logo metodología de desarrollo"
                    />
                </li>
                <li>
                    <form onSubmit={handleSubmit} className="search-container">
                        <input
                            name="query"
                            className="search-bar"
                            placeholder="Buscador de eventos"
                            value={nombreEvento}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="search-button">Buscar</button>
                    </form>
                </li>
                {storedUser ? (
                    <>
                        <li className={location.pathname === "/home" ? "active" : ""}>
                            <NavLink to="/home">Inicio</NavLink>
                        </li>
                        {userRole === 'administrador' && (
                            <li className={location.pathname === "/usuarios" ? "active" : ""}>
                                <NavLink to="/users">Usuarios</NavLink>
                            </li>
                        )}
                        {userRole === 'administrador' && (
                            <li className={location.pathname === "/evento" ? "active" : ""}>
                                <NavLink to="/evento">Crear Eventos</NavLink>
                            </li>
                        )}
                        <li className={location.pathname === "/verevento" ? "active" : ""}>
                            <NavLink to="/verevento">Ver Eventos</NavLink>
                        </li>
                        {userRole === 'emprendedor' && (
                            <li className={location.pathname === "/producto/crear" ? "active" : ""}>
                                <NavLink to="/producto/crear">Crear Producto</NavLink>
                            </li>
                        )}
                        {userRole === 'emprendedor' && (
                            <li className={location.pathname === "/producto/ObtenerTodos" ? "active" : ""}>
                                <NavLink to="/producto/ObtenerTodos">Obtener Productos</NavLink>
                            </li>
                        )}
                        <li className={location.pathname === "/perfil" ? "active" : ""}>
                            <NavLink to="/profile">Perfil</NavLink>
                        </li>
                        <li className={location.pathname === "/Inscripciones" ? "active" : ""}>
                            <NavLink to="/inscripciones/inscribir">Incribir evento</NavLink>
                        </li>
                        <li className={location.pathname === "/" ? "active" : ""}>
                            <NavLink to="/" onClick={logoutSubmit}>Cerrar</NavLink>
                        </li>
                    </>
                ) : (
                    isHomePage && (
                        <li className={location.pathname === "/login" ? "active" : ""}>
                            <NavLink to="/login">Iniciar sesión</NavLink>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
