import React from 'react';

class Footer extends React.Component{

    render(){

        return(
            <div className = 'footer-contenedor'>
                <div className = 'descripcion-footer-contenedor'>
                * El uso de nuestra aplicación es completamente gratuito. Se cobraran costos a partir de las compras realizadas. Sujeto a restricciones y otros términos.
                Los precios dentro de la aplicación están expresados en pesos uruguayos. Se requiere una tarjeta de crédito internacional o local para las transacciones.
                </div>
                <div className = 'informacion-contenedor'>
                    <div className = 'informacion-contacto-contenedor'>
                        <h2 className = 'telefono-titulo'>
                           A cualquier consulta,
                        </h2>
                        <h2 className = 'telefono'>
                            Tel. 4532757
                        </h2>
                    </div>
                    <div className = 'informacion-direccion-contenedor'>
                    <h2 className = 'direccion-titulo'>
                           Encuentranos en nuestro local
                        </h2>
                        <h2 className = 'direccion'>
                            Mercedes, Uruguay
                        </h2>
                        <h2 className = 'direccion'>
                            Sanchez 502
                        </h2>
                    </div>

                </div>
                <div className = 'copyright-direccion-contenedor'>
                        <h2 className = 'copyright'>
                            Copyright © 2020 Sharktech Inc. Todos los derechos reservados.
                        </h2>
                    </div>
            </div>
        );
    }
}

export default Footer;