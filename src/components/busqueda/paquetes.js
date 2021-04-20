import React, {useState} from "react";
import {Card, Row, Col, Button} from 'antd';

import planAcuatico from "../../assets/images/planAcuatico.jpg"
import planConocer from "../../assets/images/planConocer.jpg"
import planCultura from "../../assets/images/planCultura.jpg"
import planEcologico from "../../assets/images/planEcologico.jpg"
import planEconomico from "../../assets/images/planEconomico.jpg"
import planFamilia from "../../assets/images/planFamilia.jpg"
import planLujo from "../../assets/images/planLujo.jpg"
import planMejorRankeado from "../../assets/images/planMejorRankeado.jpg"
import planRomantico from "../../assets/images/planRomantico.jpg"
import planRumba from "../../assets/images/planRumba.jpg"

const { Meta } = Card;

function AppPaquetes() {

    const [ciudad, setCiudad] = useState('Cartagena');

    const click= (value) =>{
        localStorage.setItem("plan",value)
    }

    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>{"Planes " + ciudad}</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Modern Design" src={planMejorRankeado} />}
                                                onClick={()=>click("Mejor Rankeado")}
                                            >

                                                <Meta title={"Mejor Rankeado"} />

                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
                                        <a href='plan'>
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planRumba} />}
                                                onClick={()=>click("Rumba")}
                                            >
                                                <Meta title={"Rumba"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planFamilia} />}
                                                onClick={()=>click("Familiar")}
                                            >
                                                <Meta title={"Familiar"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planEcologico} />}
                                                onClick={()=>click("Ecologico")}
                                            >
                                                <Meta title={"Ecologico"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planEconomico} />}
                                                onClick={()=>click("Economico")}
                                            >
                                                <Meta title={"Economico"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planConocer} />}
                                                onClick={()=>click("Conocer")}
                                            >
                                                <Meta title={"Conocer"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planLujo} />}
                                                onClick={()=>click("Deluxe")}
                                            >
                                                <Meta title={"Deluxe"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planCultura} />}
                                                onClick={()=>click("Cultural")}
                                            >
                                                <Meta title={"Cultural"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planAcuatico} />}
                                                onClick={()=>click("Acuatico")}
                                            >
                                                <Meta title={"Acuatico"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planRomantico} />}
                                                onClick={()=>click("Romantico")}
                                            >
                                                <Meta title={"Romantico"} />
                                            </Card>
                                        </a>

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