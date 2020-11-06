import React from 'react';

class Pagos extends React.Component{

    render(){
        return(

            <div className = 'contenedor-padre-pagos'>
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
                        <div className = 'contenedor-tarjetas'> 
                    <img className = 'tarjeta' src = {require("../assets/images/mastercard.svg")}>
                    
                    </img>
                    <img className = 'tarjeta' src = {require("../assets/images/visa.svg")}>
                    
                    </img>
                    <img className = 'tarjeta' src = {require("../assets/images/itau.svg")}>
                    
                    </img>
                </div>
                    </div>
                </div>
              
            </div>

        );



    }


}

export default Pagos;