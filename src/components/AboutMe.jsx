import React from 'react'
import Yo from '../assets/yo.jpg'

const AboutMe = () => {
  return (
    <div className="main">
      <div className="imagenes">
      <img src={Yo} alt="pablo cossio" />
      <div className="portfolio">
        mis trabajos
      </div>
      </div>
        <div className="curriculum">
        <h1>¡Hola a todos!</h1>
        <div className="descripcion">
       
        
    <div className="aboutme">
    <p>
        Mi nombre es Pablo Cossio y me complace darles la bienvenida a mi sitio web. Soy un apasionado de la informática y la tecnología, y me dedico a varias actividades dentro de este emocionante campo.
        </p>
        <p>
          <h2>Acerca de mí:</h2>
          <ul>
            <li>
           <b> Estudiante de Profesorado de Informática:</b> Actualmente estoy cursando mi carrera de Profesorado de Informática, donde aprendo los fundamentos teóricos y prácticos de la educación en tecnología.
            </li>
            <li>
            <b>Técnico en Informática:</b>  Además, cuento con una sólida formación técnica en informática, lo que me permite comprender en profundidad el funcionamiento de los sistemas y aplicaciones informáticas.
            </li>
            <li>
            <b>Frontend Developer:</b>  Me especializo en el desarrollo frontend, creando interfaces de usuario atractivas y funcionales para aplicaciones web y móviles.
            </li>
            <li> <b>Docente en UTU:</b>
             En la Universidad del Trabajo del Uruguay (UTU), tengo el privilegio de enseñar en el Bachillerato Tecnológico Profesional (BTP) en las materias de Programación 2, Programación 3 y Base de datos. Disfruto compartiendo mi conocimiento y experiencia con los estudiantes y ayudándolos a alcanzar su máximo potencial.
            </li>
            <li> <b>Docente en secundaria:</b>
             También trabajo como docente de Informática y Poite en la educación secundaria, donde me esfuerzo por inspirar a los jóvenes a explorar el mundo de la tecnología y desarrollar habilidades que les serán útiles en el futuro.
            </li>
            <li> <b>Técnico Informático en ASSE:</b>
             En mi rol como técnico informático en ASSE, contribuyo al funcionamiento eficiente de los servicios de salud del Estado, utilizando la tecnología para mejorar la calidad y la eficacia de la atención médica.
            </li>
          </ul>
        </p>
        <p>
          <h2>Mis Pasiones y Habilidades</h2>
          <li>
            <b>Proactivo:</b>
           Me considero una persona proactiva, siempre buscando nuevas oportunidades para crecer y aprender.
          </li>
          <li>
            <b>Creación de contenidos:</b>
           Me apasiona crear contenidos digitales, desde páginas web hasta aplicativos, buscando siempre ofrecer experiencias únicas y atractivas para los usuarios.
          </li>
          <li> <b> Desarrollo continuo:</b>
          Me encanta estar en continuo desarrollo, explorando nuevas tecnologías y tendencias en el mundo de la informática y la tecnología.
          </li>

        </p>
       <p>
        <b>¡Gracias por visitar mi sitio web! Estoy emocionado de compartir mi conocimiento y experiencia con ustedes. No dude en ponerse en contacto conmigo si tiene alguna pregunta o desea colaborar en algún proyecto.</b>
       
       </p>
    </div>
           
        </div>
        
        </div>
        
    </div>
  )
}

export default AboutMe