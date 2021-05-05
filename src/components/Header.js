import React from 'react'
import Navbar from "./Navbar";
// import Button from 'react-bootstrap/Button'

const Header = () => {
   
    return <div className="banner homepage " id="header">
         <Navbar />
        <div className="banner__content">
            <div className="container">
                <div className="banner__text">            
                 <h3>Pizza Devlivery</h3>
                <h1 >MAESTRO PIZINNI</h1>
                <p  >
                    Lorem ipsum dolor sit amet consectetur adipisicing alit. Excepturi minus ut mollitia error molestiae quie, laudantium odit quasi maiores sit as similique consectetur nostrum eveniet,quis ipsam id tempora fugit.
                </p>
                <div className='banner__btn'>
                            <a href='/' className='btnn btn-smart' >
                                READ MORE
                            </a>
                    </div>
               
            </div>
        </div>
    </div>   
  </div>
    
}

export default Header
