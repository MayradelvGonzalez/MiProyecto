import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className='mainpage'>
      <h2>Vision</h2>
      
      {/* Contenedor para los botones de navegación */}
      <div className="contenedor-botones-flotantes">
        <Link to="/" className="boton-personalizado">
          Inicio
        </Link>
        <button onClick={() => navigate(-1)} className="boton-personalizado">
          Atrás
        </button>
      </div>

      <div className="contenido">
        <p>Nuestra visión</p>
      </div>
    </div>
  );
};

export default MainPage;