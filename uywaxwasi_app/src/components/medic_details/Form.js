import React from 'react'
import "../../css/styles.css"

const Form = () => {
    return (
      <div className='form'>
        <p>Añadir Vacuna</p>
        <hr/>
        <div className='form-section'>
          <h2>Mascota:</h2>
          <input type='text' placeholder='Nombre de mascota'/>
          <img src='./img/icono_pollo.png' alt='icono para pollo'/>
        </div>
        <hr/>
        <div className='form-section'>
          <h2>Tipo de Vacuna:</h2>
          <input type='text' placeholder='Nombre de vacuna'/>
          <img src='./img/icono_lapiz.png' alt='icono para lapiz'/>
        </div>       
        <hr/>
        <button>GUARDAR</button>
      </div>
    )
}

export default Form