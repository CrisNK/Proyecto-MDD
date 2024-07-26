import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { logout } from '../services/auth.service.js';

const Navbar = ({ isHomePage }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [storedUser, setStoredUser] = useState(JSON.parse(sessionStorage.getItem('usuario')));

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
                        <li className={location.pathname === "/perfil" ? "active" : ""}>
                            <NavLink to="/profile">Perfil</NavLink>
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
