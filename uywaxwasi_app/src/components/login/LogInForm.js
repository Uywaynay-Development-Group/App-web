import React from 'react'
import "../../css/styles.css"
import { Link } from 'react-router-dom'

const LogInForm = () => {
    return (
        <div className='login-form'>
            <h1>Iniciar Sesion</h1>
            <hr/>
            <div className='ingreso-datos-login'>
                <p>Email:</p>
                <input type="email" required placeholder='Correo Electronico'></input>
                <p>Contraseña</p>
                <input type="password" required placeholder='Contraseña'></input>
            </div>
            <div className='otras-opciones-login'>
                <p>¿Has olvidado la contraseña?</p>
                <Link>Recuperala aqui</Link>
            </div>
            <div className='otras-opciones-login'>
                <p>¿Eres nuevo?</p>
                <Link to='/signup'>Crear cuenta</Link>
            </div>
            <hr/>
            <div className='btn-inicio-sesion'>
                <Link to='/medicalhistory'>Iniciar Sesion</Link>
            </div>
            
        </div>
    )
}

export default LogInForm