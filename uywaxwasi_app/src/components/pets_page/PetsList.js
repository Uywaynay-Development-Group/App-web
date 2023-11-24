import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import "../../css/styles.css"

const PetsList = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('id');
        axios
            .get(`http://localhost:3000/pets/${userId}`)
            .then(res => {
                setPets(res.data.pets)
            })
            .catch(error => {
                console.error('Error fetching pets: ', error);
            });
    }, []);

    const handlePetDelete = (petId) => {
        const shouldDelete = window.confirm('¿Estás seguro de eliminar la mascota?');
        if (shouldDelete){
            axios
                .delete(`http://localhost:3000/pets/${petId}`)
                .then(res => {
                    setPets(pets.filter(value => value.id !== petId));
                })
                .catch(error => {
                    console.error('Error al eliminar la mascota: ', error);
                });
        }
    };

    return (
        <div className='pet-container'>
            {pets.map((value) => {
                return (
                    <div className='pet-card' key={value.id}>
                        <div className='pet-card-header'>
                            <p>{value.name}</p>
                            <img src={value.icon_url} alt='icono de mascota'/>
                        </div>
                        <hr/>
                        <div className='pet-card-body'>
                            <p>Especie: {value.type}</p>
                            <p>Raza: {value.breed}</p>
                            <p>Edad: {value.age}</p>
                        </div>
                        <hr/>
                        <div className='pet-card-footer'>
                            <button onClick={() => handlePetDelete(value.id)}>Eliminar</button>
                            <Link to={`/pets-update/${value.id}`}>
                                <button>Actualizar</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PetsList