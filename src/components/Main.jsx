import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../App.css';

const Main = () => {
    const navigate = useNavigate()
    return (
         <div className='main'>
   <h1>Qué hacemos</h1>
    <div className="contenedor-botones-flotantes">
        <Link to="/" className="boton-personalizado">
          Inicio
        </Link>
        <button onClick={() => navigate(-1)} className="boton-personalizado">
          Atrás
        </button>
      </div>

      <div className="contenido">
        <p>Lo que hacemos</p>
      </div>
   </div>
    )
 
}

export default Main;


