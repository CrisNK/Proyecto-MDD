import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import EditUser from './pages/EditUser';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './pages/Users';
import Asistencia from './pages/Asistencia';
import Inscripcion from './pages/Inscripcion';
import EditarEvento from './pages/editarEvento';
import BuscarEvento from './pages/BuscarEvento';
import Eventos from './pages/CrearEventos';
import VerEventos from './pages/ListaEventos';
import EliminarEvento from './pages/eliminarEvento';
import VerInscripciones from './pages/EliminarInscripcion';
import  CrearProducto  from './pages/CrearProducto';
import  ObtenerProductos  from './pages/ObtenerProductos';

const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage />
        } 
      />
      <Route 
        path="/asistencia/:eventoID" 
        element={
          <Asistencia />
        } 
      />
      <Route 
        path="/inscripciones/inscribir" 
        element={
          <Inscripcion />
        } 
      />
        <Route
        path="/producto/crear"
        element={
          <CrearProducto />
        }
      />
      <Route
        path="/producto/ObtenerTodos"
        element={
          <ObtenerProductos />
        }
      />
        <Route
        path="/producto/crear"
        element={
          <CrearProducto />
        }
      />
      <Route
        path="/producto/ObtenerTodos"
        element={
          <ObtenerProductos />
        }
      />
      <Route 
        path="/inscripciones/visualizar/" 
        element={
          <VerInscripciones />
        } 
      />
      <Route
        path="/modificarEvento"
        element={
          <EditarEvento />
        }
      />
      <Route 
        path="/inscripciones/visualizar/" 
        element={
          <VerInscripciones />
        } 
      />
      <Route
        path="/eliminarEvento"
        element={
          <EliminarEvento />
        }
      />
      <Route path="/evento/buscar/:nombreEvento" element={<BuscarEvento /> } />
      <Route
        path="/evento"
        element={
          <ProtectedRoute allowedRoles={['administrador']}>
            <Eventos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verevento"
        element={
          <VerEventos />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Rutas protegidas */}
      <Route
        path="/home" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/users" 
        element={
         <ProtectedRoute allowedRoles={['administrador']}>
            <Users />
         </ProtectedRoute>
        } 
      />
    
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/edit-user/:rut" 
        element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        } 
      />
      
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
