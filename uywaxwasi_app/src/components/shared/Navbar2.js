import React from 'react'
import "../../css/styles.css"


const NavBar2 = () => {
    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    <img src='./img/logo.png' alt='logo navbar' />
                </div>
                <nav>
                <ul class="menu">
                    <li><a href="/">Iniciar Sesion</a></li>
                    <li><a href="/signup">Registrarse</a></li>
                    <li><a href="/testimonies">Testimonios</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
                </nav>
            </header>     
        </div>            
        
    )
}

export default NavBar2