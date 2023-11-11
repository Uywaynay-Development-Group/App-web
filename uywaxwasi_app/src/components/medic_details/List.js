import React, {useState, useEffect} from 'react'
import "../../css/styles.css"
import axios from 'axios'
import { Link } from "react-router-dom";

const List = () => {

    const [vaccines, setVaccines] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/vaccines')
        .then(res => {
            setVaccines(res.data.vaccines)
        })
        .catch(error => {
            console.error('Error al obtener los autores: ', error);
        });
    }, []);

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if(!search){
        results = vaccines
    }else{
        results = vaccines.filter((data) => 
        data.pet_name.toLowerCase().includes(search.toLowerCase()) 
        )
    }

    const handleAuthorDelete = (vaccineId) => {
        const shouldDelete = window.confirm('¿Estás seguro de eliminar la vacuna?');
        if(shouldDelete){
            axios
                .delete(`http://localhost:3000/vaccines/${vaccineId}`)
                .then(res => {
                    setVaccines(vaccines.filter(value => value.id !== vaccineId));
                })
                .catch(error => {
                    console.error('Error al eliminar la vacuna: ', error);
                });
        }
    };

    return (
        <div> 
            <div className='search-bar'>
                <input type='text' value={search} onChange={searcher} placeholder='Filtrar Mascotas' />
                <button>Filtrar</button>
            </div>
            <div className="table_vaccines">
                <table>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((value) => {
                            return (
                                <tr key={value.id}>
                                    <th scope="row">
                                        <div className='register'>
                                            <img src='./img/icono_gato.png' alt='icono pata gato'/>
                                        </div>
                                    </th>
                                    <td>
                                        <div className='register'>
                                            <h2>{value.pet_name}</h2>
                                        </div>
                                    </td>
                                    <td className='celda'>
                                        <div className='register'>
                                            <p>{value.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='register'>
                                            <button onClick={() => handleAuthorDelete(value.id)}>Eliminar</button>
                                            <Link to={`/medicalhistory-update/${value.id}`}>
                                                <button>Actualizar</button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List