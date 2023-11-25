
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../css/styles.css";

const Comunity = () => {
  const [events, setEvents] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [interfaces, setInterfaces] = useState([

    "Matías, un hombre que enfrenta la dificultad de no poder caminar, encontró en Tobi, su fiel compañero de cuatro patas, un motivo para superar cualquier obstáculo. Tobi, un perro leal y cariñoso, se convirtió en más que un amigo; se convirtió en la chispa de motivación que impulsó a Matías a mantenerse activo y enfrentar cada día con determinación. Juntos, exploran el mundo, enfrentando desafíos con valentía, y demostrando que la verdadera superación viene de la mano de la amistad entre un hombre y su leal compañero .",
    "El Dallas DogRRR, un refugio de animales en Estados Unidos, ha sido escenario de una conmovedora historia de superación protagonizada por Sanford, un perro apodado como el perro roto debido a sus difíciles condiciones cuando fue rescatado. Sanford había sufrido un atropello, recibido un disparo en una pata y mostraba señales evidentes de desnutrición y maltrato. Los empleados del refugio, conmovidos por las terribles circunstancias que Sanford tuvo que enfrentar, han expresado su incapacidad para imaginar el dolor que el perro debió soportar. A pesar de las duras realidades que enfrentan en su trabajo, los asistentes del Dallas DogRRR se esfuerzan por brindarle todo el apoyo necesario a Sanford, quien, a pesar de sus adversidades, muestra una salud fuerte y una voluntad de sobrevivir que ha dejado impresionados a los veterinarios del refugio. El caso de Sanford resalta la difícil labor que implica el trabajo en un refugio de animales, y los cuidadores expresan su consternación ante la crueldad infligida a un ser tan vulnerable. La historia de Sanford no solo subraya su valentía y capacidad de recuperación, sino también la importancia de brindar amor y cuidado a aquellos que han sufrido maltrato, contribuyendo así a su proceso de superación y búsqueda de un nuevo hogar.",
    "Bicho, un perro juguetón, vivió una Navidad inolvidable cuando sus amos decidieron compartir las festividades en casa. Su alegría desbordante se manifestó al intentar saborear las bolas del árbol navideño, sumando una dosis única de diversión a la celebración. A pesar de los desafíos, el final de año marcó un hito significativo para Bicho, ya que le quitaron la sonda y comenzó a disfrutar de la comida líquida por boca. La valiente travesía de Bicho no solo fue un testimonio de su resistencia, sino también un conmovedor proceso de recuperación. La pérdida de siete kilos durante la aventura no fue obstáculo para su felicidad, y con un peso actual de 12 kg, alimentándose exclusivamente de comida líquida, demuestra una vez más su espíritu resiliente. Asistir a la boda de su ama fue un momento especial, subrayando la importancia de la unión familiar incluso en circunstancias desafiantes. A día de hoy, Bicho continúa sometiéndose a controles para monitorear la salud de su páncreas, con la esperanza y la fortaleza que lo caracterizan. Esta historia está dedicada a la valentía de Bicho y a la inquebrantable perseverancia de su amorosa familia.",
    "Carlos, un valiente perro, se enfrentó a la adversidad cuando un accidente lo dejó parapléjico. Sin embargo, con amor y cuidado, junto con tratamientos especializados, Carlos demostró una notable fortaleza y determinación para recuperarse. Con el tiempo y la dedicación de sus cuidadores, Carlos no solo superó la paraplejia, sino que también logró volver a caminar. Su historia es un testimonio conmovedor de cómo el afecto y el esfuerzo pueden transformar la vida de un ser querido, demostrando que, incluso en los momentos más oscuros, la esperanza y la perseverancia pueden abrir un nuevo camino hacia la movilidad y la felicidad.",
  
  ]);

  const [currentComments, setCurrentComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    axios.get('https://uywaxwasi-api.onrender.com/events')
      .then(res => {
        setEvents(res.data);
      })
      .catch(error => {
        console.error('Error al obtener eventos:', error);
      });
  }, []);

  const handleMostrarInterfaz = (index) => {
    setSelectedImageIndex(index);
    setCurrentComments([]); 
  };

  const handleCerrarInterfaz = () => {
    setSelectedImageIndex(null);
    setCurrentComments([]);
    setCommentText('');
  };

  const handleAgregarComentario = () => {
    if (commentText.trim() !== '') {
      setCurrentComments([...currentComments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="community-container">
      
      <div className="community-section1">
        <p>Algunas historias de superación</p>
        <div className="image-container">
          {[
            { src: "./img/asis_perro.png", alt: "Imagen 1" },
            { src: "./img/t1.png", alt: "Imagen 2" },
            { src: "./img/t2.png", alt: "Imagen 3" },
            { src: "./img/t3.png", alt: "Imagen 4" },
          ].map((image, index) => (
            <div key={index}>
              <img className="community-image" src={image.src} alt={image.alt} />
              <button className="button_c" onClick={() => handleMostrarInterfaz(index)}>Ver más</button>
            </div>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="interfaz-fondo">
          <div className="interfaz">
            <h2>Información sobre la historia de superación</h2>
            <p>{interfaces[selectedImageIndex]}</p>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Escribe tu comentario..."
            />
            <button onClick={handleAgregarComentario}>Agregar Comentario</button>
            <ul>
              {currentComments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <button onClick={handleCerrarInterfaz}>Volver</button>
          </div>
        </div>
      )}
    </div>
  );
  

};

export default Comunity;


