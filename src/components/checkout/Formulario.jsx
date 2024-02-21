import React, { useState, useEffect } from 'react';
import './formulario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faToilet, faUser } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SweetAlert();
        clearForm();
        console.log(formData);

    };
    const clearForm = () => {
        setFormData({
            nombre: "",
            apellido: "",
            dni: "",
            telefono: "",
            email: "",
        });
    }

    const handleLimpiar = () => {
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "¿De verdad deseas borrar los datos ingresados?",
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                setFormData({
                    nombre: "",
                    apellido: "",
                    dni: "",
                    telefono: "",
                    email: "",
                });
                Swal.fire("Datos borrados!", "", "success");
            } else {
                Swal.fire("Operación cancelada", "", "info");
            }
        });
    };

    const SweetAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Datos cargados correctamente",
            html: `<ul style="text-transform: uppercase; text-align: left;">
            <p><b>Nombre: ${formData.nombre}</b></p> <br /> 
            <p><b>Apellido: ${formData.apellido}</b></p><br /> 
            <p><b>DNI: ${formData.dni}</b></p><br />
            <p><b>Teléfono: ${formData.telefono}</b></p><br />
            <p><b>Email: ${formData.email}</b></p><br />
            </ul>
            `,
            footer: `<p><b>sus datos han sido almacenados en nuestra base de datos</b></p>`,
            showConfirmButton: true,

        });
    }
    return (
        <div className='formulario'>
            <div className='tituloFormulario'>
                <h2><FontAwesomeIcon icon={faUser} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px" }} />Carga de datos</h2>
                <Link className='btnAtras' to={'/checkout'}>
                    <button className='btn  fw-bold buttonAtras'>Volver al Carro</button>
                </Link>
            </div>
            <div className="formulario-pasos">
                <div className='pasos'>
                    <h2>Pasos para completar el formulario:</h2>
                    <p><strong>¡Gracias por elegir nuestro servicio! Para garantizar una experiencia fluida y satisfactoria, por favor sigue estos sencillos pasos para completar el formulario:</strong></p>

                    <h3><strong>PASO 1:</strong> Completa tus datos personales.</h3>
                    <p>Ingresa tu Nombre, Apellido, DNI, dirección de correo electrónico y numero de teléfono en los campos provistos. Estos datos son necesarios para identificarte y enviar la factura.</p>

                    <h3><strong>PASO 2:</strong> Revisa y confirma tus datos.</h3>
                    <p>Antes de enviar el formulario, asegúrate de revisar cuidadosamente todos los datos proporcionados para evitar errores. Una vez que estés seguro de que toda la información es correcta, puedes proceder a enviar el formulario.</p>

                    <p><strong>Nota importante:</strong> Los datos que ingreses en este formulario serán utilizados únicamente para generar la factura correspondiente a tu compra. Garantizamos la confidencialidad y seguridad de tus datos personales, y no serán compartidos con terceros sin tu consentimiento.</p>

                    <h3>Recibirás tu factura por correo electrónico:</h3>
                    <p>Una vez que hayamos procesado tu pedido y generado la factura, te la enviaremos por correo electrónico a la dirección proporcionada. Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nosotros.</p>

                    <p><strong>Gracias por tu confianza y por elegir nuestros productos. <br /> ¡Esperamos que disfrutes de tu compra!</strong></p>
                    <h3><strong>Apiterapia Dejando Huellas</strong></h3>
                </div>

                <div className="formularioContainer">
                    <form className='formChekout' onSubmit={handleSubmit}>
                        <label>
                            Nombre: <input type="text" name="nombre" requiredvalue={formData.nombre} onChange={handleChange} />
                        </label>
                        <label>
                            Apellido: <input type="text" name="apellido" required value={formData.apellido} onChange={handleChange} />
                        </label>
                        <label>
                            DNI: <input type="text" name="dni" requiredvalue={formData.dni} onChange={handleChange} />
                        </label>
                        <label>
                            Número de teléfono: <input type="text" name="telefono" required value={formData.telefono} onChange={handleChange} />
                        </label>
                        <label>
                            Email: <input type='email' name="email" required value={formData.email} onChange={handleChange} />
                        </label>
                        <div className='botones'>
                            <button className='btn-enviar' type="submit"><FontAwesomeIcon icon={faPaperPlane} style={{ paddingRight: "5px" }} />Enviar</button>
                            <button className='btn-limpiar ' type="button" onClick={handleLimpiar}><FontAwesomeIcon icon={faToilet} style={{ paddingRight: "5px" }} />Limpiar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );
}

export default Formulario;
