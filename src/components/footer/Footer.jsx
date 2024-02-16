import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './footer.css'



const Footer = () => {
    const whatsappNumber = '+5493512646228';
    const whatsappMessage = 'Hola Apiterapia Dejando Huellas, estoy interesado en sus productos. ¿Podrías darme más información?';

    const openWhatsappChat = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
                    <button onClick={openWhatsappChat}><FontAwesomeIcon icon={faWhatsapp} /></button>
                </div>
                <div className="rights-reserved">
                    © 2024 Apiterapia Dejando Huellas. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
