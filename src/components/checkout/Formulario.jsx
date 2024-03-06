import React, { useState } from 'react';
import './formulario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faToilet, faUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getProduct, ordenCompraCreate, updateProduct } from '../../../public/data/firebase';

function Formulario() {
    const navigate = useNavigate();
    const { cart, total, cartDelete } = useCartContext();

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
        clearForm();
        console.log(formData);

        const carro = [...cart];

        carro.forEach(productoCarrito => {
            getProduct(productoCarrito.id).then(productoDB => {
                if (productoDB.stock >= productoCarrito.quantity) {
                    productoDB.stock -= productoCarrito.quantity;
                    updateProduct(productoDB.id, productoDB);
                } else {
                    carro = carro.filter(producto => producto.id !== productoDB.id); // Update the value of carro
                    Swal.fire({
                        icon: "warning",
                        title: "Atención",
                        text: `No hay stock suficiente para este producto ${productoDB.name}`,
                        showConfirmButton: true,
                    });
                }
            }).catch(e => {
                Swal.fire({
                    icon: "warning",
                    title: "Atención",
                    text: `Error al obtener producto: ${e}`,
                    showConfirmButton: true,
                });
            });
        });

        const cargaProductos = carro.map(producto => ({
            id: producto.id,
            quantity: producto.quantity,
            value: producto.value
        }));

        ordenCompraCreate(formData.nombre, total(), cargaProductos, new Date().toLocaleDateString("es-AR", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                console.log("Orden de compra:", ordenCompra);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Datos cargados correctamente",
                    html: `
                    <ul style="text-transform: uppercase; text-align: left;">
                    <li><b>Nombre:</b> ${formData.nombre}</li>
                    <li><b>Apellido:</b> ${formData.apellido}</li>
                    <li><b>DNI:</b> ${formData.dni}</li>
                    <li><b>Teléfono:</b> ${formData.telefono}</li>
                    <li><b>Email:</b> ${formData.email}</li>
                    </ul>
                    <p>El número de comprobante de su compra es <b>${ordenCompra.id}</b></p>
                    <p> el total de su compra es <b>$ ${total()}</b></p>`,
                    footer: `<p><b>¡Gracias por  su compra! vuelva prontos</b></p>`,
                    showConfirmButton: true,
                });
                navigate('/');

            })
            .catch(e => {
                Swal.fire({
                    icon: "warning",
                    title: "Atención",
                    text: `Error al crear la orden de compra: ${e}`,
                    showConfirmButton: true,
                });
            });

        cartDelete();
    };

    const clearForm = () => {
        setFormData({
            nombre: "",
            apellido: "",
            dni: "",
            telefono: "",
            email: "",
        });
    };

    const handleLimpiar = () => {
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "¿De verdad deseas borrar los datos ingresados?",
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                clearForm();
                Swal.fire("Datos borrados!", "", "success");
            } else {
                Swal.fire("Operación cancelada", "", "info");
            }
        });
    };



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
                            Nombre: <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} />
                        </label>
                        <label>
                            Apellido: <input type="text" name="apellido" required value={formData.apellido} onChange={handleChange} />
                        </label>
                        <label>
                            DNI: <input type="text" name="dni" required value={formData.dni} onChange={handleChange} />
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
