import React from 'react';
import Button from 'react-bootstrap/Button';

const Menu = () => {
    return (
        <div className="about" id="menu" >
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about__img">
                        <img src="/img/bg1.jpg" alt="pizzaimage" />
                    </div>
                </div>
                <div className="col-lg-6 p-25">
                    <h3>The Pizza Menu</h3>
                    <h1>CHICAGO THIN CRUST</h1>
                    <p>
                    Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynaus,quise sequitur mutationem consuetudium lectorum.
                    </p>
                    <div className="about__btn">
                    <Button variant="dark">DEVLERY NOW</Button>{' '} 
                        
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Menu
