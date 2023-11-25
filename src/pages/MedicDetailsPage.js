import React, {useState} from "react";
import NavBar from "../components/shared/Navbar";
import Title from "../components/shared/Title";
import List from "../components/medic_details/List";
import Form from "../components/medic_details/Form";
import GlassEffect from "../components/shared/GlassEffect";
import "../css/styles.css"

const MedicDetailsPage = () => {
    const[openForm, setOpenForm] = useState(false);
    return (
        <div>
            {
                openForm && <GlassEffect/> 
            }
            {
                openForm && <Form/>
            }
            <NavBar/>
            <Title content="Historial Medico" img="./img/img_medicdetail.png"/>
            <div className="subtitle">
                <p>Registros Medicos</p>         
            </div>
            <hr/>
            <List/>
            <hr/>
            <div className="subtitle">
                <div className="agregar_registro" onClick={() => setOpenForm((prev) => !prev)}>
                        <img src="./img/img_medicdetail.png" alt="icono perfil navbar"/>  
                    </div>            
            </div>
            
                
        </div>
    );
}

export default MedicDetailsPage