import React, {useState} from "react";
import {Card, Carousel,Row, Col} from 'antd';
import hotel from "../../assets/images/hotel.jpg";
import restaurante from "../../assets/images/restaurante.jpg";
import bar from "../../assets/images/bar.jpg";
import monumento from "../../assets/images/monumento.jpg";
import parque from "../../assets/images/parque.jpg";
import cine from "../../assets/images/cine.jpg";
import evento from "../../assets/images/evento.jpg";
import promo from "../../assets/images/promo.jpg";


const { Meta } = Card;

const items = [
    {
        key: '1',
        title: 'Cartagena',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        image : 'https://res.cloudinary.com/eia/image/upload/v1613953666/qyy1px336lx11famykj3.jpg'
    },
    {
        key: '2',
        title: 'Medellín',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        image : 'https://res.cloudinary.com/eia/image/upload/v1617930313/yjwy0cekd0bsgdsnywi3.jpg'
    },
    {
        key: '3',
        title: 'Cali',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        image : 'https://res.cloudinary.com/eia/image/upload/v1606176387/io6thfh9jygotsfcjv1h.jpg'
    },
]

function AppPaquetes() {

    const [ciudad, setCiudad] = useState('Cartagena');

    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>{"Planes " + ciudad}</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={promo} />}
                                    >
                                        <Meta title={"Mejor Rankeado"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Rumba"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Familiar"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Ecologico"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Economico"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Conocer"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Deluxe"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Cultural"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Acuatico"} />
                                    </Card>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>
                                    <Card
                                        hoverable
                                        cover={<img alt="Test" src={promo} />}
                                    >
                                        <Meta title={"Romantico"} />
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

export default AppPaquetes;