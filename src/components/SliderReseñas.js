import React from 'react';
import Slider from "react-slick";


class SliderReseñas extends React.Component {

    
    render() {
        return(

            <div className = 'slider-contenedor-reseñas'>
                <div className = 'contenedor-información-reseñas'>
                    <h2 className = 'reseñas'>
                         Algunas reseñas
                    </h2>
                    <h2 className = 'descripcion-reseñas'>
                        Algunas palabras validando y apoyando a Sharktech son de mucha ayuda. Tenemos el gusto de compartirlas con nuestro público.
                    </h2>
                </div>
                <Slider
                className ='Slider-reseñas'
                speed = {500}
                slidesToShow = {1}
                slidesToScroll = {1}
                Infinite = {false}
                dots = {true}
                >
                <div className = 'Slider1'>
                    <div className = 'reseña-contenedor'>
                        <div className = 'reseña1 reseña'>
                            <div className = 'foto-perfil-contenedor'>
                                <div className = 'imagen-reseña'>

                                </div>
                            </div>
                            <div className = 'nombre-usuario-contenedor'>
                                <h2 className = 'nombre-usuario'>
                                    @MarcosC
                                </h2>
                            </div>
                            <div className = 'reseña-descripcion-contenedor'>
                                <h2 className = 'descripcion'>
                                    Buen producto, tiene cositas, pueder ser pa? anashe
                                </h2>
                            </div>  
                        </div>
                        <div className = 'reseña2 reseña'>
                            <div className = 'foto-perfil-contenedor'>
                                <div className = 'imagen-reseña imagen2'>

                                </div>
                            </div>
                            <div className = 'nombre-usuario-contenedor'>
                                <h2 className = 'nombre-usuario'>
                                    @JoaquinB
                                </h2>
                            </div>
                            <div className = 'reseña-descripcion-contenedor'>
                                <h2 className = 'descripcion'>
                                    Me facilito muchos aspectos de mi vida diaria
                                </h2>
                            </div>  
                        </div>
                        <div className = 'reseña3 reseña'>
                            <div className = 'foto-perfil-contenedor'>
                                <div className = 'imagen-reseña imagen3'>

                                </div>
                            </div>
                            <div className = 'nombre-usuario-contenedor'>
                                <h2 className = 'nombre-usuario'>
                                   @el tabo
                                </h2>
                            </div>
                            <div className = 'reseña-descripcion-contenedor'>
                                <h2 className = 'descripcion'>
                                    Altamente recomendado pa, ninguna queja especifica
                                </h2>
                            </div>  
                        </div>
                    </div>
                </div>


                </Slider>
            </div>

        );
    }    
}

export default SliderReseñas;