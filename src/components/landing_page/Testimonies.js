import React from 'react'
import "../../css/lp_styles.css"

const Testimonies = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
            <ul className='testimonials_container'>
                <li>
                    <div className="testimonial">
                        <p>
                            "Está pagina web es bastante buena, 
                            me ayudo mucho mejorando el cuidado de mi mascota. 
                            El servicio que más use es el recordatorio de actividades 
                            ya que suelo olvidarme mucho"
                        </p>
                        <img className="image6" src="./img/img6.png" alt="imagen 6"/>
                        <hr/>
                        <div className="details">
                            <h2>Robert Angeles</h2>
                            <div className="stars">                                   
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>Dueño de Mascota</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>
                            "Hola que tal mi nombre es María Fernandez, la verdad 
                            mi experiencia en está pagina web es muy satifactoria,  
                            su interfaz es muy buena y se me ha hecho de facil uso, 
                            sus servicios es 10/10"
                        </p>
                        <img className="image7" src="./img/img7.png" alt="imagen 7"/>
                        <hr/>
                        <div className="details">
                            <h2>Maria Fernandez</h2>
                            <div className="stars">                                   
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>Dueña de Mascota</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>
                            "Hola, soy veterinario y me encanta 
                            que haya una pagina web 
                            muy comprometidos en mejorar el cuidado de las mascotas,  
                            doy consejos y recomendaciones en 
                            el servicio de la comunidad online"
                        </p>
                        <img className="image8" src="./img/img8.png" alt="imagen 8"/>
                        <hr/>
                        <div className="details">
                            <h2>Antonio Baltazar</h2>
                            <div className="stars">                                   
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>Veterinario</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Testimonies