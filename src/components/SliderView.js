import React from 'react';
import Slider from "react-slick";


export default class SliderView extends React.Component {

    render (){
        return (
            <div className = "slider-contenedor">
                <div className = 'contenedor-nuestros-productos'>
                    <h2 className = 'nuestros-productos'>
                        Nuestros productos
                    </h2>
                </div>
                <Slider className ='Slider'
                speed = {500}
                slidesToShow = {1}
                slidesToScroll = {1}
                Infinite = {false}
                dots = {true}
                >
                    <div className="Slider1">
                        <div className="producto-contenedor">
                            <div className = 'producto1 producto'>
                                <img className = 'producto1-imagen' src = {require("../assets/images/mouse.png")}>

                                </img>
                                <h2 className = 'producto-nombre'>
                                    Mouse
                                </h2>
                            </div>
                            <div className = 'producto2 producto'>
                                <img className = 'producto2-imagen' src = {require("../assets/images/teclado.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Teclado
                                </h2>
                            </div>
                            <div className = 'producto3 producto'>
                                <img className = 'producto3-imagen' src = {require("../assets/images/microfono.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Microfono
                                </h2>
                            </div>
                        </div>
                    </div> 
                    <div className="Slider2">
                        <div className="producto-contenedor">
                            <div className = 'producto1 producto'>
                                <img className = 'producto1-imagen' src = {require("../assets/images/gpu.png")}>

                                </img>
                                <h2 className = 'producto-nombre'>
                                    Tarjeta Gráfica
                                </h2>
                            </div>
                            <div className = 'producto1 producto'>
                                <img className = 'producto1-imagen' src = {require("../assets/images/ram.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Memoria RAM
                                </h2>
                            </div>
                            <div className = 'producto3 producto'>
                                <img className = 'producto3-imagen' src = {require("../assets/images/cpu.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Procesador
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="Slider3">
                        <div className="producto-contenedor">
                            <div className = 'producto1 producto'>
                                <img className = 'producto1-imagen' src = {require("../assets/images/auricular.png")}>

                                </img>
                                <h2 className = 'producto-nombre'>
                                    Auricular
                                </h2>
                            </div>
                            <div className = 'producto1 producto'>
                                <img className = 'producto1-imagen' src = {require("../assets/images/placamadre.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Placa Madre
                                </h2>
                            </div>
                            <div className = 'producto3 producto'>
                                <img className = 'producto3-imagen' src = {require("../assets/images/discoduro.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Disco Duro
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="Slider3">
                        <div className="producto-contenedor">
                            <div className = 'producto1 producto'>
                                <img className = 'producto1-imagen' src = {require("../assets/images/auricular.png")}>

                                </img>
                                <h2 className = 'producto-nombre'>
                                    Auricular
                                </h2>
                            </div>
                            <div className = 'producto2 producto'>
                                <img className = 'producto2-imagen' src = {require("../assets/images/monitor.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    Monitor
                                </h2>
                            </div>
                            <div className = 'producto2 producto'>
                                <img className = 'producto2-imagen' src = {require("../assets/images/SSD.png")}>
                                    
                                </img>
                                <h2 className = 'producto-nombre'>
                                    SSD
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }

}
