import React from 'react';

class Diseño extends React.Component{

    render(){

        return(
            <div className = 'contenedor-diseño'>
                <div className = 'informacion-diseño-contenedor'>
                    <h2 className = 'informacion-diseño-titulo'>
                        Un diseño moderno
                    </h2>
                    <h2 className = 'informacion-diseño-descripcion'>
                       Nuestro programa cuenta con un diseño moderno, lejos de los tipicos que hacen parecer que estamos en el año 2007. Simple y sencillo de usar, olvidaté de los aburridos y grises locales.
                    </h2>
                </div>
                <div className = 'diseño-imagen-contenedor'>
                    <img className = 'imagen-diseño' src = {require("../assets/images/diseño.svg")}> 
                    
                    </img>
                </div>
            </div>


        );

    }


}

export default Diseño;