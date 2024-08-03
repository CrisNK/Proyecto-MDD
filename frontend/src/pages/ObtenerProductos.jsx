import { useState, useEffect } from 'react';
import { ObtenerProductos } from '../services/Productos.service';
import '../styles/verProductos.css';

function VerProductos() {
  const [productos, setProductos] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const result = await ObtenerProductos();
        setProductos(result.data);  
        console.log(productos);
        setError(null);
      } catch (error) {
        setProductos([]);
        setError(error.message);
      }
    };

    fetchProductos(); // Obtiene los productos
  }, []);

  return (
    <div className="body-obtenerProducto">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Lista de Productos</h1>
      </div>

      {error && <p className="error-message">{error}</p>}
      <div className="container-obtenerProducto">
        {productos.length > 0 ? (
          <ul>
            {productos.map((producto) => (
              <li key={producto._id}>
                <b>Evento ID:</b> {producto.eventoId}
                <br></br>
                <b>Emprendedor ID:</b> {producto.emprendedorId}
                <br></br>
                <b>Nombre producto:</b> {producto.nombre}
                <br></br>
                <b>Descripción:</b> {producto.descripcion}
                <br></br>
                <b>Precio:</b> {producto.precio}
                <br></br>
                <b>Stock:</b> {producto.stock}
              </li>
            ))}
          </ul>
        ) : (!error && <p>No se encontraron productos registrados.</p>)}
      </div>
    </div>
  );
}

export default VerProductos;