import React, {useState} from 'react'
import DropDownMenu from './DropDownMenu'
import "../../css/styles.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    const[openProfile, setOpenProfile] = useState(false);

    return (
        <div>
            <header className='header'>
                <Link to="/" className='logo'>
                    <img src='./img/logo.png' alt='logo navbar' />
                </Link>
                <nav>
                <ul className="menu">
                    <li><Link to="/medicalhistory">Historial Medico</Link></li>
                    <li><Link to="/activities">Actividades</Link></li>
                    <li><Link to="/comunity">Comunidad</Link></li>
                    <li><Link to="/reminders">Recordatorios</Link></li>
                </ul>
                </nav>
                <div className='icon_profile' onClick={() => setOpenProfile((prev) => !prev)}>
                    <img src="./img/icono_perfil.png" alt="icono perfil navbar"/>  
                </div>               
            </header> 
            {
                openProfile && <DropDownMenu/> 
            } 
              
        </div>            
        
    )
}

export default NavBar