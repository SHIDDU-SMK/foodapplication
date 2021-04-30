import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function TempletePizzini({ data }) {
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center", paddingTop: "7rem" }}>
                    <b>
                        {data.Title}
                    </b> <br />
                    <b>
                        {data.SubTitle}
                    </b>
                </h1>

                <div className="container" style={{ marginTop: "60px" }}>
                   
                            <>
                                <hr className="featurette-divider" />
                         
                                <Col>
                                {
                                        data.Products.map(item =>
                                    <Row>
                                   
                                    
                                        <Image src={item.image}  width='230' />
                                    
                                    
                                        <h2 style={{ textAlign: "center"}}>
                                            {item.heading}
                                        </h2>

                                        <p >
                                            {item.paragraph}
                                        </p>
                                    
                                        <h2 style={{ textAlign: "center"}}>
                                            {item.$rate}
                                        </h2>
                                
                                    </Row>
                                         )
                                        }
                                        
                                </Col>
                                 

                            </>
                     
                </div>
            </div>
        </>
    );
}

export default TempletePizzini;