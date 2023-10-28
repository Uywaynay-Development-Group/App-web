import React from "react";
import NavBar from "../components/shared/Navbar";
import Title from "../components/shared/Title";
import SearchBar from "../components/medic_details/SearchBar";
import List from "../components/medic_details/List";
import Form from "../components/medic_details/Form";
import "../css/styles.css"

const MedicDetailsPage = () => {
    return (
        <div>
            <NavBar/>
            <Title content="Historial Medico"/>
            <div className="subtitle">
                <p>Registros Medicos</p>
                <hr/>
            </div>
            <SearchBar/>
            <List/>
            <div className="subtitle">
                <p>Agregar Registro</p>
                <hr/>
            </div>
            <Form/>
        </div>
    );
}

export default MedicDetailsPage