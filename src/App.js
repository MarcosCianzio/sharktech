import React from 'react';
import Inicio from './components/Inicio';
import SliderView from './components/SliderView';
import Pagos from './components/Pagos';
import Diseño from './components/Diseño';
import SliderReseñas from './components/SliderReseñas';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './assets/css/Navbar.css';
import './assets/css/Footer.css';
import './assets/css/SliderReseñas.css';
import './assets/css/Diseño.css';
import './assets/css/App.css';
import './assets/css/Pagos.css';
import './assets/css/Inicio.css';
import './assets/css/SliderView.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Inicio/>
      <SliderView/>
      <Pagos/>
      <SliderReseñas/>
      <Diseño/>
      <Footer/>
    </div>
  );
}

export default App;
