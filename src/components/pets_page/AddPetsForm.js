import React, {useState} from 'react'
import axios from 'axios'
import "../../css/styles.css"

const AddPetsForm = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [user, setUser] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(localStorage.getItem('id'));
        if (type == "Gato") {
            setUrl('./img/icono_gato.png');
        } 
        if(type == "Perro"){
            setUrl("./img/icono_perro.png");
        }
        if(type == "Ave"){
            setUrl("./img/icono_ave.png");
        }
        if(type == "Roedor"){
            setUrl("./img/icono_roedor.png");
        }
        axios.post('https://uywaxwasi-api.onrender.com/pets', {name, type, breed, age, url, user})
            .then(response => {
                alert("Mascota registrada")
                window.location.href = '/pets';
            })
            .catch(error => {
                alert("Error al registrar mascota")
            })
    }

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <div className='form'>
                <p>Añadir Mascota</p>
                <hr/>
                <div className='form-section'>
                    <div className='form-section-subtitle'>
                        <h2>Nombre de Mascota:</h2>
                    </div>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Nombre de mascota'/>
                </div>
                <hr/>
                <div className='form-section-selection'>
                    <div className='form-section-subtitle'>
                        <h2>Especie:</h2>
                    </div>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option>Seleccionar Especie</option>
                        <option>Perro</option>
                        <option>Gato</option>
                        <option>Ave</option>
                        <option>Roedor</option>
                    </select>
                </div>
                <hr/>
                <div className='form-section'>
                    <div className='form-section-subtitle'>
                        <h2>Raza:</h2>
                    </div>                  
                    <input type='text' value={breed} onChange={(e) => setBreed(e.target.value)} required placeholder='Raza'/>
                </div>
                <hr/>
                <div className='form-section'>
                    <div className='form-section-subtitle'>
                        <h2>Edad:</h2>
                    </div>
                    <input type='text' value={age} onChange={(e) => setAge(e.target.value)} required placeholder='Edad'/>
                </div>
                <hr/>
                <a href='/pets'><button type='submit'>GUARDAR</button></a>
            </div>
        </form>
    )
}

export default AddPetsForm

