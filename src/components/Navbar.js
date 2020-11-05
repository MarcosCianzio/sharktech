import React from 'react';

class Navbar extends React.Component{

    render(){
        return(

          <div className = 'nav'>
              <img className = 'logo' src = {require("../assets/images/sharktech.svg")}>
              </img>
          </div>

        );



    }


}

export default Navbar;