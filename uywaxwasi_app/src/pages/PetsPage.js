import React from "react";
import NavBar from "../components/shared/Navbar";
import Title from "../components/shared/Title";
import PetsList from "../components/pets_page/PetsList";
import AddPetsForm from "../components/pets_page/AddPetsForm";
import GlassEffect from "../components/shared/GlassEffect";
import "../css/styles.css"

const PetsPage = () => {

    const [openForm, setOpenForm] = React.useState(false);

    return (
        <div>
            {
                openForm && <GlassEffect/> 
            }
            {
                openForm && <AddPetsForm/>
            }
            <NavBar/>
            <Title content="Mascotas" img="./img/img_pets.png"/>
            <div className="subtitle">
                <p>Mascotas Registradas</p>         
            </div>
            <hr/>
            <PetsList/>
            <hr/>
            <div className="subtitle">
                <div className="agregar_registro">
                    <img src="./img/img_pets.png" alt="icono pets" onClick={() => setOpenForm((prev) => !prev)}/>
                </div>
            </div>
        </div>
        
    )
}

export default PetsPage