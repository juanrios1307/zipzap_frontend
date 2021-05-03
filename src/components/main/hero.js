import React, {useState} from "react";
import {Card, Carousel,Row, Col} from 'antd';
import hotel from "../../assets/images/hotel.jpg";
import restaurante from "../../assets/images/restaurante.jpg";
import bar from "../../assets/images/bar.jpg";
import monumento from "../../assets/images/monumento.jpg";
import parque from "../../assets/images/parque.jpg";
import cine from "../../assets/images/cine.jpg";
import evento from "../../assets/images/evento.jpg";


const { Meta } = Card;


function AppHero() {

    return (
        <div id="hero" className="heroBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>ZIPZAP </h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={hotel} />}
                                    >
                                        <Meta title={"Hoteles"} />
                                    </Card>
                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={restaurante} />}
                                    >
                                        <Meta title={"Restaurantes"} />
                                    </Card>
                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={bar} />}
                                    >
                                        <Meta title={"Bares"} />
                                    </Card>
                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={monumento} />}
                                    >
                                        <Meta title={"Monumentos"} />
                                    </Card>
                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={parque} />}
                                    >
                                        <Meta title={"Parques"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={cine} />}
                                    >
                                        <Meta title={"Cines"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={evento} />}
                                    >
                                        <Meta title={"Eventos"} />
                                    </Card>
                                </Col>


                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>

        </div>
    );
}

export default AppHero;