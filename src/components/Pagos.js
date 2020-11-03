import React from 'react';

class Pagos extends React.Component{

    render(){
        return(

            <div className = 'contenedor-pagos'>
                <div className = 'imagen-contenedor'>
                    <img className = 'imagen-pagos' src = {require("../assets/images/pagos.svg")}> 
                    
                    </img>
                </div>
                <div className = 'informacion-pagos-contenedor'>
                    <h2 className = 'informacion-pagos-titulo'>
                        Excelentes metodos de pagos
                    </h2>
                    <h2 className = 'informacion-pagos-descripcion'>
                        Incluimos una gran variedad de metodos de pago, además de un servicio de transacciones completamente seguro y cifrado. Realiza todas las operaciones que desees con tu <b> tarjeta </b> desde la comodidad de tu hogar, con la mayor seguridad.
                    </h2>
                </div>
            </div>

        );



    }


}

export default Pagos;