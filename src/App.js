import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import './estilos.css'

const App = () => {
	const [nombre, cambiarNombre] = useState({campo: '', Valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', Valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', Valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);
	
	const expresiones = {
    	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}


	const onChangeTerminos = (e) => {
			cambiarTerminos(e.target.checked);
		}

	const onSubmit = (e) => {
			e.preventDefault();

		if(
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
			correo.valido === 'true' && 
			ContenedorTerminos
		){ 
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarApellido({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});

			//... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<h1>Formulario con validaciones</h1>
			<Formulario action="" onSubmit={onSubmit}>
				<Input 
				estado={nombre}
				cambiarEstado={cambiarNombre}
				tipo="text"
				label="Nombre"
				placeholder="Ingrese su nombre"
				name="nombre"
				leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
				expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Ingrese su apellido"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="email@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
			
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
	
} 


export default App;
