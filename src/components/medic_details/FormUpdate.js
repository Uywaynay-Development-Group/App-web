import React, { useState, useEffect } from "react";
import "../../css/styles.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FormUpdate = () => {
    const { vaccineId} = useParams();
    const [name, setName] = useState('');
    const [pet_name, setPetName] = useState('');
    const [petId, setPetId] = useState(''); 
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
            .get(`https://uywaxwasi-api.onrender.com/pets/${localStorage.getItem('id')}`)
            .then((res) => {
                setPets(res.data.pets);
            })
            .catch((error) => {
                console.error('Error al conseguir usuario: ', error);
            });
        axios.get(`https://uywaxwasi-api.onrender.com/vaccine/${vaccineId}`)
            .then(res => {
                const vaccineData = res.data.vaccine;
                setName(vaccineData.name);
                setPetName(vaccineData.pet_name);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [vaccineId]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.get(`https://uywaxwasi-api.onrender.com/pet/${petId}`)
            .then(res => {
                setPetName(res.data.pet.name)
            })
            .catch(error => {
                console.error('Error al obtener la mascota escogida: ', error);
      }     );
        axios.put(`https://uywaxwasi-api.onrender.com/vaccines/${vaccineId}`, {
            name, pet_name
        })
        .then(response => {
          alert("Vacuna actualizada")
          window.location.href = '/medicalhistory';
        })
        .catch(error => {
          alert("Error al actualizar vacuna")
        })
    
    };

    return (
        <form onSubmit={handleUpdate} className='form-container' >
            <div className='form' >
                <p>Actualizar Vacuna</p>
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
                </div>
                <hr/>
                <div className='form-section'>
                    <h2>Tipo de Vacuna:</h2>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Nombre de vacuna'/>
                </div>       
                <hr/>
                <a href='/medicalhistory'><button type='submit'>Actualizar</button></a>
            </div>
        </form> 
    );
};

export default FormUpdate