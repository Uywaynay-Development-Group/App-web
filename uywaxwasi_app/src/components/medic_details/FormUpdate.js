import React, { useState, useEffect } from "react";
import "../../css/styles.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FormUpdate = () => {
    const { vaccineId} = useParams();
    const [name, setName] = useState('');
    const [pet_name, setPetName] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/vaccines/${vaccineId}`)
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
        axios.put(`http://localhost:3000/vaccines/${vaccineId}`, {
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
                <div className='form-section'>
                    <h2>Mascota:</h2>
                    <input type='text' value={pet_name} onChange={(e) => setPetName(e.target.value)} required placeholder='Nombre de mascota'/>
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