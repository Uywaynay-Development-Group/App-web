import React, {useState, useEffect} from 'react'
import "../../css/styles.css"
import axios from 'axios';

const Form = () => {

  const [name, setName] = useState('');
  const [pet_name, setPetName] = useState('');
  const [petId, setPetId] = useState(''); 
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/pets/${localStorage.getItem('id')}`)
      .then((res) => {
        setPets(res.data.pets);
      })
      .catch((error) => {
        console.error('Error al conseguir usuario: ', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/pet/${petId}`)
      .then(res => {
        setPetName(res.data.pet.name)
      })
      .catch(error => {
        console.error('Error al obtener la mascota escogida: ', error);
      });

    axios.post('http://localhost:3000/vaccines', {name, pet_name, petId, userId: localStorage.getItem('id')})
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
        <div className='form-section-selection'>
          <h2>Mascota:</h2>
          <select value={petId} onChange={(e) => setPetId(e.target.value)}>
            <option>Seleccionar Mascota</option>
            {pets.map((pet) => {
              return(
                <option key={pet.id} value={pet.id}>
                  {pet.name}
                </option>
              );
            })}
          </select>
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