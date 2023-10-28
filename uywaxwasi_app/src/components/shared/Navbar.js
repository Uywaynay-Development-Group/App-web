import React from 'react'
import "../../css/styles.css"

const NavBar = () => {
    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    <img src='./img/logo.png' alt='logo navbar' />
                </div>
                <nav>
                <ul class="menu">
                    <li><a href="/medicalhistory">Historial Medico</a></li>
                    <li><a href="/activities">Actividades</a></li>
                    <li><a href="/comunity">Comunidad</a></li>
                    <li><a href="/reminders">Recordatorios</a></li>
                </ul>
                </nav>
            </header>     
        </div>            
        
    )
}

export default NavBar