import React, {useState} from "react";
import {Card, Row, Col, Button, Carousel} from 'antd';

import image from "../assets/images/planAcuatico.jpg"
import { EditOutlined, DeleteOutlined , EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

function AppMisEstablecimientos() {

    const [ciudad, setCiudad] = useState('Cartagena');
    const [establecimientos, setEstablecimientos]=useState([]);

    const click= (value) =>{
        localStorage.setItem("plan",value)
    }

    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Mis Establecimientos</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>
                                {establecimientos.map(item => {
                                    return (
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                            <Card
                                                hoverable
                                                cover={<img alt="Modern Design" src={image} />}
                                                actions={[
                                                    <EyeOutlined  key="select" />,
                                                    <EditOutlined key="update" />,
                                                    <DeleteOutlined key="delete"/>
                                                ]}

                                            >

                                                <Meta title={item.nombre} />

                                                <p>{item.fecha_subida}</p>

                                            </Card>


                                        </Col>
                                    )
                                })
                                }


                            </Row>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AppMisEstablecimientos;