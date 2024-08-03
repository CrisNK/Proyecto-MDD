import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { CrearProducto } from '../services/Productos.service';
import '../styles/form.css'

function Productos() {
  const navigate = useNavigate();

  const productoSubmit = async (data) => {
    try {
      const response = await CrearProducto(data);
      if (response && response.status === 201) {
        setTimeout(() => {
          navigate('/home');
        }, 1600);
      } else {
      console.error('Error al crear producto:', response);
      }
    } catch (error) {
      console.error('Error al crear producto',error);
    }
  };

  return (
    <div className="container">
      <Form
        title="Crear producto"
        fields={[
          {
            label: "Id del evento",
            name: "eventoId",
            placeholder: "Identificador del evento",
            type: "text",
            required: true,
          },
          {
            label: "ID Emprendedor",
            name: "emprendedorId",
            placeholder: "Identificador de emprendedor",
            type: "text",
            required: true,
          },
          {
            label: "Nombre del producto",
            name: "nombre",
            placeholder: "Completos italianos",
            type: "text",
            required: true,
          },
          {
            label: "Descripcion del producto",
            name: "descripcion",
            placeholder: "Pan. palta, sachicha y mayonesa",
            type: "text",
            required: true,
          },
          {
            label: "Precio del producto",
            name: "precio",
            placeholder: "$2000",
            type: "number",
            required: true,
          },
          {
            label: "Stock del producto",
            name: "stock",
            placeholder: "40",
            type: "number",
            required: true,
          },
        ]}
        buttonText="Agregar producto"
        onSubmit={productoSubmit}
      />
    </div>
  );
};

export default Productos;