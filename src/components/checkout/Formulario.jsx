import React, { useState, useEffect } from 'react';
import './formulario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faToilet, faUser } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
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
            </div>
            <form className='formChekout' onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        type="text"
                        name="apellido"
                        required
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    DNI:
                    <input
                        type="text"
                        name="dni"
                        required
                        value={formData.dni}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Número de teléfono:
                    <input
                        type="text"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <div className='botones'>
                    <button className='btn-enviar' type="submit"><FontAwesomeIcon icon={faPaperPlane} style={{ paddingRight: "5px" }} />Enviar</button>
                    <button className='btn-limpiar ' type="button" onClick={handleLimpiar}><FontAwesomeIcon icon={faToilet} style={{ paddingRight: "5px" }} />Limpiar</button>
                </div>
            </form>
        </div>

    );
}

export default Formulario;
