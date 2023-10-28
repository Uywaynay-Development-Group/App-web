import React from 'react'
import "../../css/styles.css"

const Register = () => {
    return (
        <div>
            <div className='register'>
                <img src='./img/icono_gato.png' alt='icono pata gato'/>
                <h2>ODY</h2>
                <p>Vacuna Rabia</p>
                <button>Eliminar</button>
                <button>Actualizar</button>
            </div>

            <div className='register'>
                <img src='./img/icono_perro.png' alt='icono pata perro'/>
                <h2>RORY</h2>
                <p>Vacuna Hepatitis Canina</p>
                <button>Eliminar</button>
                <button>Actualizar</button>
            </div>
        </div>
    )
}

export default Register