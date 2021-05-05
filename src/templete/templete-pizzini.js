import React from 'react';
import {  Row, Col, Card} from 'react-bootstrap';

function TempletePizzini({ data }) {
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center", paddingTop: "7rem"  }} id="footer" >
                    <b>
                        {data.Title}
                    </b> <br />
                    <b>
                        {data.SubTitle}
                    </b>
                </h1>

                <div className="container " style={{ marginTop: "60px"  }}>
                   
                    <>
                        <hr className="featurette-divider" />
                            <div className="container templetepizzni">
                         <Row className="justify-content-md-center">
                                {
                                        data.Products.map(item =>
                                    
                                    <Col md="4">
                                        <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={item.image} style={{height:"15rem" }} width="200px"  height="270px"/>
                                        <Card.Body>
                                            <Card.Title>{item.heading}</Card.Title>
                                            <Card.Text>
                                            {item.paragraph}
                                            </Card.Text>
                                            <h2 style={{ textAlign: "center"}}>
                                                {item.$rate}
                                            </h2>
                                        </Card.Body>
                                            </Card>
                                
                                        </Col>
                                
                                        )
                                    }
                            </Row> 
                        </div>
                    </>     
                </div>
            </div>
          <hr className="featurette-divider"/>

        </>
    );
}

export default TempletePizzini;