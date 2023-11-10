import React from 'react'
import "../../css/styles.css"

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input type='text' placeholder='Filtrar Mascotas' />
            <button>Filtrar</button>
        </div>
    )
}

export default SearchBar