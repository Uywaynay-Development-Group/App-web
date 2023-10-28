import React from 'react'
import "../../css/styles.css"

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
                <a href='/'>Iniciar Sesion</a>
            </div>
            <hr/>
            <div className='btn-inicio-sesion'>
                <a href='/medicalhistory'>Registrarse</a>
            </div>
            
        </div>
    )
}

export default SignUpForm