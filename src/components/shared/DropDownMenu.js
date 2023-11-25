import React from 'react'
import "../../css/styles.css"
import { Link } from 'react-router-dom'

const DropDownMenu = () => {
    return (
        <div >
            <ul className='drop_down_menu'>
                <li><Link>Perfil</Link></li>
                <hr/>
                <li><Link>Configuracion</Link></li>
                <hr/>
                <li><Link to="/">Cerrar Sesion</Link></li>
                <hr/>
            </ul>
        </div>
    )
}

export default DropDownMenu