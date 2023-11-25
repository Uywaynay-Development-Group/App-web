import React from "react";
import Comunity from "./../components/comunity_page/Comunity";
import Navbar from "./../components/shared/Navbar";
import Title from "./../components/shared/Title";
import "../css/styles.css";

const ComunityPage = () => {
    return (
        <div>
            <Navbar/>
            <Title content="Comunidad" img="./img/img_comunity.png"/>
            <div className="subtitle">
                <p>Historias de superacion</p>         
            </div>
            <hr/>
            <Comunity/>
            <div className="subtitle">
                <p>Foro de la comunidad</p>         
            </div>
            <hr/>
            <div className="subtitle">
                <p>Bienvenido al foro de la comunidad. Únete a las diversas historias de superación que comparte usuarios de sus mascotas.</p>
            </div>
        </div>
    )
};

export default ComunityPage;