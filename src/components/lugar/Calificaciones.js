import React, {useState,useEffect} from "react";
import { Card, Row, Col, Rate} from 'antd';
import Axios from "axios";
import moment from "moment";

const { Meta } = Card;

function AppComentarios() {

    const [comentarios, setComentarios]=useState([]);


    const getRatings = async() =>{

        setComentarios([])

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/calificacion/place/'

        const token = localStorage.getItem("token")
        const id = localStorage.getItem("establecimiento")

        const config = {
            method: 'get',
            url: url+id,
            headers: {
                'access-token': token
            }
        };

        const response = await Axios(config)

        const data = response.data

        setComentarios(data)

    }


    useEffect(()=>{
        getRatings()

    },[])

    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Comentarios Y Calificaciones</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>
                                {comentarios.map(item => {
                                    return (
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                            <Card
                                                hoverable
                                            >
                                                <Meta title={item.comentario} />
                                                <Rate disabled defaultValue={item.calificacion} />
                                                <p>{moment(item.fecha).format("YYYY-MM-DD")}</p>
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

export default AppComentarios;