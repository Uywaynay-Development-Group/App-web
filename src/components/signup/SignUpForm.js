import React, {useState} from 'react'
import "../../css/styles.css"
import { Link } from 'react-router-dom'
import axios from 'axios';

const SignUpForm = () => {

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://uywaxwasi-api.onrender.com/users', {type, name, email, password})
            .then(response => {
                alert("Usuario registrado")
                window.location.href = '/login';
            })
            .catch(error => {
                alert("Error al registrar usuario")
            })
    };

    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <h1>Registrarse</h1>
            <hr/>
            <div className='ingreso-datos-login'>
                <p>Usuario o Veterinario</p>
                <input type='text' value={type} onChange={(e) => setType(e.target.value)} required placeholder='Tipo de Usuario'></input>
                <p>Nombre:</p>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Nombre'></input>
                <p>Email:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Correo Electronico'></input>
                <p>Contraseña</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Contraseña'></input>
            </div>
            <div className='otras-opciones-login'>
                <p>¿Ya tienes una cuenta?</p>
                <Link to='/login'>Iniciar Sesion</Link>
            </div>      
            <hr/>
            
            <button type='submit' className='btn-inicio-sesion'>Registrarse</button>
                    
        </form>
    )
}

export default SignUpForm