import React from 'react'
import "../../css/lp_styles.css"
import { Link } from 'react-router-dom'

const Cta = () => {
    return (
        <div className="call_to_action_container">
            <div>
                <h1>¡Bienvenido!</h1>
                <p>
                    Has llegado al lugar adecuado
                    para elevar el bienestar de tus
                    queridas mascotas. Somos
                    pioneros en mejorar su atencion 
                    y calidad de vida
                </p>
                <Link className="btn"><button>¡Contacanos Ahora!</button></Link>
            </div>    
            <img className="image1" src="./img/img1.png" alt="imagen 1"/>                                       
        </div>
    )
}

export default Cta