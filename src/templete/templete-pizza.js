import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function TempletePizza({ data }) {
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

                <div className=" background" style={{ marginTop: "60px" }}>
                    {
                        data.Products.map(item =>
                            <>
                                <hr className="featurette-divider " />
                                <Row className="justify-content-md-center templetepizza">
                                    <Col md="4" >
                                        < Image src={item.image} style={{  textAlign: "center",paddingTop:"30px" ,paddingLeft:"60px"}} width='300' height="250" />
                                    </Col>
                                    <Col md="4" >
                                        <h2  style={{ textAlign: "center", paddingTop: "4rem" }}>
                                            {item.heading}
                                        </h2>

                                        <p  style={{ textAlign: "center", paddingTop: "1rem" }}>
                                            {item.paragraph}
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <h2   style={{ textAlign: "center", paddingTop: "7rem" }}>
                                            {item.$rate}
                                        </h2>
                                    </Col>
                                </Row>

                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default TempletePizza;