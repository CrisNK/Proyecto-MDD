import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth.service.js';
import Form from "../components/Form";
import ImgLogo from "../components/ImgLogo";

const Register = () => {

	const navigate = useNavigate();

    const registerSubmit = (data) => {
        register(data).then(() => {
            navigate('/')
        })
    }

	return (
		<main className="container">
			<ImgLogo />
			<Form
				title="Crea tu cuenta"
				fields={[
					{
						label: "RUT",
						name: "rut",
						placeholder: "23.770.330-1",
						type: "text",
					},
					{
						label: "Nombre de usuario",
						name: "nombre",
						placeholder: "",
						type: "text",
					},
					{
						label: "Nombre de emprendimiento",
						name: "emprendimiento",
						placeholder: "",
						type: "text",
					},					
					{
						label: "Correo electrónico",
						name: "correo",
						placeholder: "example@gmail.com",
						type: "email",
					},
					{
						label: "Contraseña",
						name: "password",
						placeholder: "*********",
						type: "password",
					},
					{
						label: "Número de contacto",
						name: "numeroContacto",
						placeholder: "9 1234 5678",
						type: "tel",
					}
				]}
				buttonText="Registrarse"
				onSubmit={registerSubmit}
				footerContent={
					<p>
						¿Ya tienes cuenta?, <a href="/login">Inicia sesión aquí!</a>
					</p>
				}
			/>
		</main>
	);
};

export default Register;
