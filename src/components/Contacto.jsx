import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Contacto = () => {
    const navigate = useNavigate()
    return (
  <div className="contacto">
        <h1>Contacto</h1>
       <div className="contenedor-botones-flotantes">
        <Link to="/" className="boton-personalizado">
          Inicio
        </Link>
        <button onClick={() => navigate(-1)} className="boton-personalizado">
          Atrás
        </button>
      </div>

      <div className="contenido">
        <p>Contacto</p>
      </div>
         </div>
    )}

export default Contacto;