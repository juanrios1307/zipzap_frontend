import React, {useState,useEffect} from "react";
import {Card, Row, Col} from 'antd';

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

    const [ciudad, setCiudad] = useState(' ');

    const setPlan= (value) =>{
        localStorage.setItem("plan",value)
    }

    useEffect(()=>{


        setCiudad(localStorage.getItem('city'))

    },[])

    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>{"Planes " + ciudad}</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>

                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <a href='plan'>
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planRumba} />}
                                                onClick={()=>setPlan(1)}
                                            >
                                                <Meta title={"Rumba"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planFamilia} />}
                                                onClick={()=>setPlan(2)}
                                            >
                                                <Meta title={"Familiar"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planEcologico} />}
                                                onClick={()=>setPlan(3)}
                                            >
                                                <Meta title={"Ecologico"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planEconomico} />}
                                                onClick={()=>setPlan(4)}
                                            >
                                                <Meta title={"Economico"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planConocer} />}
                                                onClick={()=>setPlan(5)}
                                            >
                                                <Meta title={"Conocer"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planLujo} />}
                                                onClick={()=>setPlan(6)}
                                            >
                                                <Meta title={"Deluxe"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planCultura} />}
                                                onClick={()=>setPlan(7)}
                                            >
                                                <Meta title={"Cultural"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planAcuatico} />}
                                                onClick={()=>setPlan(8)}
                                            >
                                                <Meta title={"Acuatico"} />
                                            </Card>
                                        </a>

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>

                                        <a href='/plan' >
                                            <Card
                                                hoverable
                                                cover={<img alt="Test" src={planRomantico} />}
                                                onClick={()=>setPlan(9)}
                                            >
                                                <Meta title={"Romantico"} />
                                            </Card>12
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