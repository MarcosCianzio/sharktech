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
                        Nuestro programa cuenta con un diseño moderno, muy lejos de los típicos que asemejan al año 2007. Simple y sencillo de usar, olvídate de los aburridos y grises locales. Cabe destacar, nuestra página web no posee tablas, las cuales son completamente obsoletas para el año en el que vivimos.
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