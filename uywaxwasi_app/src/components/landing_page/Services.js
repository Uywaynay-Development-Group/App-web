import React from 'react'
import "../../css/lp_styles.css"

const Services = () => {
    return (
        <div className="services_container">
            <div className="service">
                <img className="image2" src="./img/img2.png" alt="imagen 2"/>
                <hr/>
                <p>Registrar Historial Medico</p>
            </div>
            <div className="service">
                <img className="image3" src="./img/img3.png" alt="imagen 3"/>
                <hr/>
                <p>Recordatorio de Actividades</p>
            </div>
            <div className="service">
                <img className="image4" src="./img/img4.png" alt="imagen 4"/>
                <hr/>
                <p>Seguimiento de Actividades</p>
            </div>
            <div className="service">
                <img className="image5" src="./img/img5.png" alt="imagen 5"/>
                <hr/>
                <p>Comunidad Online</p>
            </div>
        </div>
    )
}

export default Services