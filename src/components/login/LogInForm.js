import React, {useState, useEffect} from 'react'
import "../../css/styles.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const LogInForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3000/users/login', {email, password})
            .then(({data}) => {
                window.location.href = '/medicalhistory';
            })
            .catch(error => {
                alert("Error al iniciar sesion")
            });
    };
    
    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <h1>Iniciar Sesion</h1>
            <hr/>
            <div className='ingreso-datos-login'>
                <p>Email:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Correo Electronico'></input>
                <p>Contraseña</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Contraseña'></input>
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
            <button type='submit' className='btn-inicio-sesion'>Iniciar Sesion</button>
            
        </form>
    )
}

export default LogInForm