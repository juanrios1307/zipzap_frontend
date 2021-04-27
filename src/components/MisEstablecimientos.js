import React, {useState} from "react";
import {Card, Row, Col} from 'antd';

import image from "../assets/images/planAcuatico.jpg"
import { EditOutlined, DeleteOutlined , EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

function AppMisEstablecimientos() {

    const [establecimientos, setEstablecimientos]=useState([]);

    const edit = () =>{
        console.log("edit")
    }

    const eliminar = () =>{
        console.log("delete")
    }

    const see = () =>{
        console.log("see")
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
                                                    <EyeOutlined  key="select" onClick ={()=>see}/>,
                                                    <EditOutlined key="update" onClick ={()=>edit}/>,
                                                    <DeleteOutlined key="delete" onClick ={()=>eliminar}/>
                                                ]}

                                            >

                                                <Meta title={item.nombre} />

                                                <p>{item.fecha_subida}</p>

                                            </Card>


                                        </Col>
                                    )
                                })
                                }

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                    <Card
                                        hoverable
                                        cover={<img alt="Modern Design" src={image} />}
                                        actions={[
                                            <EyeOutlined  key="select" onClick ={()=>see()}/>,
                                            <EditOutlined key="update" onClick ={()=>edit()}/>,
                                            <DeleteOutlined key="delete" onClick ={()=>eliminar()}/>
                                        ]}

                                    >

                                        <Meta title={"NN"} />

                                        <p>{"NN"}</p>

                                    </Card>


                                </Col>


                            </Row>

                            <a href="/signup/place" className="a">Registra Tu Empresa</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AppMisEstablecimientos;