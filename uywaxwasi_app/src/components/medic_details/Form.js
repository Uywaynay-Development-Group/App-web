import React, {useState} from 'react'
import "../../css/styles.css"
import axios from 'axios';

const Form = () => {

  const [name, setName] = useState('');
  const [pet_name, setPetName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/vaccines', {name, pet_name})
      .then(response => {
        alert("Vacuna registrada")
        window.location.href = '/medicalhistory';
      })
      .catch(error => {
        alert("Error al registrar vacuna")
      })
  };

  return (
    <form onSubmit={handleSubmit} className='form-container' >
      <div className='form' >
        <p>Añadir Vacuna</p>
        <hr/>
        <div className='form-section'>
          <h2>Mascota:</h2>
          <input type='text' value={pet_name} onChange={(e) => setPetName(e.target.value)} required placeholder='Nombre de mascota'/>
          <img src='./img/icono_pollo.png' alt='icono para pollo'/>
        </div>
        <hr/>
        <div className='form-section'>
          <h2>Tipo de Vacuna:</h2>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Nombre de vacuna'/>
          <img src='./img/icono_lapiz.png' alt='icono para lapiz'/>
        </div>       
        <hr/>
        <a href='/medicalhistory'><button type='submit'>GUARDAR</button></a>
      </div>
    </form> 
  )
}

export default Form