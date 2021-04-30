import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
return(
    <div className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-25">
                    <h3>About Us</h3>
                    <h1>WELCOME TO MAESTRO PIZZINI</h1>
                    <p>
                    Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynaus, quise sequitur mutationem consuetudium lectorum.

                    </p>
                    <div className="about__btn">
                    <Button variant="dark">Veiw More</Button>{' '}
                          
                    
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about__img">
                        <img src="/img/pizza.jpg" alt="pizzaimage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
         
    );
};

export default About;




