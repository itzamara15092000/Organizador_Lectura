import React from 'react';
import { Link } from 'react-router-dom';
import { useJQueryPlugins } from '../hooks/useJQueryPlugins';

export default function HomePage() {
  useJQueryPlugins();

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo */}
                <a href="/" className="logo">
                  <img src="/assets/images/klassy-logo.png" style={{ width: '146px' }} alt="Leaftime" />
                </a>
                
                {/* Menu */}
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Casa</a></li>
                  <li className="scroll-to-section"><a href="#about">Nosotros</a></li>
                  <li className="scroll-to-section"><a href="#menu">Libros Destacados</a></li>
                  <li><Link to="/books">Mi Biblioteca</Link></li>
                </ul>
                
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <div id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-content">
                <div className="inner-content">
                  <h4>Leaftime</h4>
                  <h6>Agenda Literaria</h6>
                  <div className="main-white-button scroll-to-section">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-banner header-text">
                <div className="Modern-Slider">
                  {/* Slider Items */}
                  <div className="item">
                    <div className="img-fill">
                      <img src="/assets/images/slide-01.jpg" alt="Slide 1" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="img-fill">
                      <img src="/assets/images/slide-02.jpg" alt="Slide 2" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="img-fill">
                      <img src="/assets/images/slide-03.jpg" alt="Slide 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Sobre Nosotros</h6>
                  <h2>Leaftime</h2>
                </div>
                <p>
                  LeafTime es una agenda literaria personal creada para lectores que buscan organizar y disfrutar cada libro. 
                  Aquí podrás registrar tus lecturas, clasificarlas por estado, guardar tu progreso y mantener un historial 
                  claro de lo que has leído, estás leyendo o deseas leer. <br /><br />
                  Nuestro objetivo es que tengas un espacio cómodo, visual y adaptado a ti, donde cada libro se convierta 
                  en un viaje registrado y cada página leída cuente.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src="/assets/images/about-thumb-01.jpg" alt="About 1" />
                  </div>
                  <div className="col-4">
                    <img src="/assets/images/about-thumb-02.jpg" alt="About 2" />
                  </div>
                  <div className="col-4">
                    <img src="/assets/images/about-thumb-03.jpg" alt="About 3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-content">
                <div className="thumb">
                  <img src="/assets/images/about-video-bg.jpg" alt="About Video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Books Section */}
      <section className="section" id="menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>Libros</h6>
                <h2>Los 6 libros número uno de cada género más relevantes.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item-carousel">
          <div className="col-lg-12">
            <div className="owl-menu-item owl-carousel">
              <div className="item">
                <div className='card card1'>
                  <div className="price"><h6>#1</h6></div>
                  <div className='info'>
                    <h1 className='title'>Fantasía</h1>
                    <p className='description'>Harry Potter y la Piedra Filosofal (J. K. Rowling).</p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="https://www.harrypotter.com/es" target="_blank" rel="noopener noreferrer">
                          26/Jun/1997 <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className='card card2'>
                  <div className="price"><h6>#2</h6></div>
                  <div className='info'>
                    <h1 className='title'>Ciencia ficción</h1>
                    <p className='description'>Dune.</p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">01/Ago/1965 <i className="fa fa-angle-down"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className='card card3'>
                  <div className="price"><h6>#3</h6></div>
                  <div className='info'>
                    <h1 className='title'>Romance</h1>
                    <p className='description'>Orgullo y Prejuicio (Jane Austen).</p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">28/Ene/1813 <i className="fa fa-angle-down"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className='card card4'>
                  <div className="price"><h6>#4</h6></div>
                  <div className='info'>
                    <h1 className='title'>Suspenso / Thriller</h1>
                    <p className='description'>El Código Da Vinci (Dan Brown).</p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">18/Mar/2003 <i className="fa fa-angle-down"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className='card card5'>
                  <div className="price"><h6>#5</h6></div>
                  <div className='info'>
                    <h1 className='title'>Aventura</h1>
                    <p className='description'>La Isla del Tesoro (Robert Louis Stevenson).</p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">14/Nov/1883 <i className="fa fa-angle-down"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className='card card3'>
                  <div className="price"><h6>#6</h6></div>
                  <div className='info'>
                    <h1 className='title'>Terror</h1>
                    <p className='description'>El Resplandor (Stephen King).</p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">28/Ene/1977 <i className="fa fa-angle-down"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Comienza Ahora</h6>
                  <h2>Crea tu Agenda Literaria Personal</h2>
                </div>
                <p>Organiza tus lecturas, lleva el control de tu progreso y descubre nuevas historias. 
                   Haz click en "Ir a Mi Biblioteca" para comenzar a registrar tus libros favoritos.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-book"></i>
                      <h4>Mi Biblioteca</h4>
                      <span>
                        <Link to="/books" style={{ color: '#8b5e3c', fontWeight: '600' }}>Ir a Mi Biblioteca</Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-heart"></i>
                      <h4>Organiza</h4>
                      <span style={{ color: '#a67c52' }}>
                        Guarda y clasifica tus lecturas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="thumb">
                  <img src="/assets/images/about-video-bg.jpg" alt="Biblioteca Personal" style={{ borderRadius: '12px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12">
              <div className="left-text-content">
                <div className="logo">
                  <img src="/assets/images/klassy-logo.png" alt="Leaftime Logo" style={{ width: '120px', marginBottom: '20px' }} />
                </div>
                <p style={{ color: '#8b7355', lineHeight: '1.8' }}>
                  LeafTime es tu compañero ideal para organizar y disfrutar cada lectura. 
                  Cada libro es una nueva aventura.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="middle-content">
                <div className="section-heading">
                  <h4 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Enlaces Rápidos</h4>
                </div>
                <ul className="footer-links">
                  <li><a href="#top" style={{ color: '#a67c52' }}>Inicio</a></li>
                  <li><a href="#about" style={{ color: '#a67c52' }}>Sobre Nosotros</a></li>
                  <li><a href="#menu" style={{ color: '#a67c52' }}>Libros Destacados</a></li>
                  <li><Link to="/books" style={{ color: '#8b5e3c', fontWeight: '600' }}>Mi Biblioteca</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="right-content">
                <div className="section-heading">
                  <h4 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Conecta con Nosotros</h4>
                </div>
                <p style={{ color: '#8b7355', marginBottom: '15px' }}>
                  Síguenos en nuestras redes sociales para más recomendaciones literarias.
                </p>
                <ul className="social-icons">
                  <li><a href="#" style={{ color: '#8b5e3c' }}><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" style={{ color: '#8b5e3c' }}><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" style={{ color: '#8b5e3c' }}><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#" style={{ color: '#8b5e3c' }}><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-footer">
                <p style={{ color: '#8b7355', textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #d4a574' }}>
                  © {new Date().getFullYear()} LeafTime - Agenda Literaria. Todos los derechos reservados.
                  <br />
                  <span style={{ fontSize: '0.9em', color: '#a67c52' }}>
                    Hecho con <i className="fa fa-heart" style={{ color: '#c77777' }}></i> para los amantes de la lectura
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
