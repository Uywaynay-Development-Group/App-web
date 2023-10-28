import React from 'react'
import "../../css/styles.css"

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
                <a href='#'>Recuperala aqui</a>
            </div>
            <div className='otras-opciones-login'>
                <p>¿Eres nuevo?</p>
                <a href='/signup'>Crear cuenta</a>
            </div>
            <hr/>
            <div className='btn-inicio-sesion'>
                <a href='/medicalhistory'>Iniciar Sesion</a>
            </div>
            
        </div>
    )
}

export default LogInForm