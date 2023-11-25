import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../css/styles.css"

const UpdatePetsForm = () => {

    const { petId } = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        axios.get(`https://uywaxwasi-api.onrender.com/pets/${petId}`)
            .then(res => {
                const petData = res.data.pet;
                setName(petData.name);
                setType(petData.type);
                setBreed(petData.breed);
                setAge(petData.age);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [petId]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`https://uywaxwasi-api.onrender.com/pets/${petId}`, {
            name, type, breed, age
        })
        .then(response => {
          alert("Mascota actualizada")
          window.location.href = '/pets';
        })
        .catch(error => {
          alert("Error al actualizar mascota")
        })
    };

    return (
        <form onSubmit={handleUpdate} className="form-container">
            <div className="form">
                <p>Actualizar Mascota</p>
                <hr/>
                <div className="form-section">
                    <div className='form-section-subtitle'>
                        <h2>Nombre de Mascota:</h2>
                    </div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nombre de mascota"/>
                </div>
                <hr/>
                <div className="form-section-selection">
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
                <div className="form-section">
                    <div className='form-section-subtitle'>
                        <h2>Raza:</h2>
                    </div>
                    <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} required placeholder="Raza"/>
                </div>
                <hr/>
                <div className="form-section">
                    <div className='form-section-subtitle'>
                        <h2>Edad:</h2>
                    </div>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required placeholder="Edad"/>
                </div>
                <hr/>
                <a href="/pets"><button type="submit">Actualizar</button></a>
            </div>
        </form>
    )
}

export default UpdatePetsForm