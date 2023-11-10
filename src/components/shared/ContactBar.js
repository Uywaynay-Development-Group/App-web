import React from 'react'
import "../../css/lp_styles.css"
import { Link } from 'react-router-dom'

const ContactBar = () => {
    return (
        <div className="contact_container">
            <h2>¿Quieres contactarte con nosotros?</h2>
            <img className="image9" src="./img/img9.png" alt="imagen 9"/>
            <img className="image9" src="./img/img9.png" alt="imagen 9"/>
            <img className="image9" src="./img/img9.png" alt="imagen 9"/>
            <img className="image9" src="./img/img9.png" alt="imagen 9"/>
            <img className="image9" src="./img/img9.png" alt="imagen 9"/>
            <Link className="btn2"><button>INGRESA AHORA</button></Link>
        </div>
    )
}

export default ContactBar