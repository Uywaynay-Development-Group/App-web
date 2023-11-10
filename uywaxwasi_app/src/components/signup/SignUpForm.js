import React from 'react'
import "../../css/styles.css"
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    return (
        <div className='login-form'>
            <h1>Registrarse</h1>
            <hr/>
            <div className='ingreso-datos-login'>
                <p>Usuario o Veterinario</p>
                <input type='text' required placeholder='Tipo de Usuario'></input>
                <p>Nombre:</p>
                <input type='text' required placeholder='Nombre'></input>
                <p>Email:</p>
                <input type="email" required placeholder='Correo Electronico'></input>
                <p>Contraseña</p>
                <input type="password" required placeholder='Contraseña'></input>
                <p>Confirmar Contraseña</p>
                <input type="password" required placeholder='Contraseña'></input>
            </div>
            <div className='otras-opciones-login'>
                <p>¿Ya tienes una cuenta?</p>
                <Link to='/login'>Iniciar Sesion</Link>
            </div>      
            <hr/>
            <div className='btn-inicio-sesion'>
                <Link to='/medicalhistory'>Registrarse</Link>
            </div>
            
        </div>
    )
}

export default SignUpForm