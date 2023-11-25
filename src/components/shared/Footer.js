import React from 'react'
import "../../css/lp_styles.css"

const Footer = () => {
    return (
        <footer className="footer">
            <link rel="stylesheet" href="http://use.fontawesome.com/releases/v5.5.0/css/all.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
            <h2>Siguenos en nuestras redes sociales</h2>
            <div class="social_media_links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
        </footer>
    )
}

export default Footer