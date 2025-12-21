import React, { useState, useEffect } from 'react';
import logo from '../img/Diseño sin título.gif';
import 'animate.css';
import '../App.css'; 

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

// botón "Ir Arriba"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* BOTÓN IR ARRIBA */}
      {showTopBtn && (
        <button onClick={goToTop} className="boton-ir-arriba">
          ↑
        </button>
      )}

      {/* HEADER PRINCIPAL */}
      <header className="App-header" id="inicio" style={{backgroundColor:'#1a099aff'}}>
        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul> 
            <li className="boton-comenzar-nav" onClick={() => scrollToSection('vision')}>Visión</li>
            <li className="boton-comenzar-nav" onClick={() => scrollToSection('que-hacemos')}>Qué hacemos</li>
            <li className="boton-comenzar-nav" onClick={() => scrollToSection('contacto')}>Contacto</li>
            <li className="boton-comenzar-nav" onClick={() => scrollToSection('inicio')}>Inicio</li>
          </ul>
        </nav>
<div style={{ 
  position: 'relative', 
  display: 'inline-block',
  textAlign: 'center'
}}>

  <div className='codigo'>
    01100011 01101111 01100100 01101001 01100010 01111001 01110100
  </div>

  <h1 className='titulo'>
    CODIBYT
  </h1>
</div>
        {/* <h1 style={{color: '#00bf63', fontSize:'3em'}}>CODIBYT</h1>01100011 01101111 01100100 01101001 01100010 01111001 01110100 */}
        <img src={logo} className="App-logo" alt="logo" /> 
        <h2 style={{color: '#00bf63'}}>Ofrecemos soluciones <br />Brindamos tranquilidad </h2>
      </header>

      {/* SECCIÓN VISIÓN */}
      <section id="vision" className="mainpage section-container">
        <div className="contenedorSecciones vision">
         
        </div>
      </section>

      {/* SECCIÓN QUÉ HACEMOS */}
      <section id="que-hacemos" className="main section-container">
        <div className='contenedorSecciones hacemos'> 
          <h1 animate__animated fadeIn>Qué hacemos</h1>
          <div className="contenido"><p>Desarrollamos software a medida con pasión.</p></div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="contacto-section section-container">
        <div className="contacto">
          <h1>Contacto</h1>
          <div className="contenido"><p>Contáctanos en: info@codibyt.com</p></div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;