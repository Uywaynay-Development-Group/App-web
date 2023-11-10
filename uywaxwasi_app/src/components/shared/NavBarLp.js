import React from 'react'
import "../../css/lp_styles.css"
import { Link } from 'react-router-dom'

const NavBarLp = () => {
    return (
        <div>
            <header className="header">
                <Link to="/" className="logo">
                    <img src="./img/logo.png" alt="logo navbar lp"/>
                </Link>
                <nav>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Servicios</Link></li>
                        <li><Link to="#">Testimonios</Link></li>
                        <li><Link to="/signup">Registrarse</Link></li>
                        <li><Link to="/login">Inicio Sesion</Link></li>
                    </ul>
                </nav>
                <Link className="icon_phone">
                    <img src="./img/icono-telefono.png" alt="icono telefono navbar"/>          
                </Link>
            </header>
            <hr/>     
        </div>                   
    )
}

export default NavBarLp