import React, {useState,useEffect} from "react";
import {Image, Card, Row, Col, Carousel, Rate} from 'antd';

import { EditOutlined, DeleteOutlined , EyeOutlined } from '@ant-design/icons';
import Axios from "axios";
import {Redirect} from "react-router-dom";
import moment from "moment";

const { Meta } = Card;

function AppMisRatings() {


    const [ratings, setRatings]=useState([]);
    const [seeBool, setSeeBool]=useState(false);
    const [updateBool, setupdateBool]=useState(false);

    const getReservas = async() =>{

        setRatings([])

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/users/ratings/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'get',
            url: url,
            headers: {
                'access-token': token
            }
        };

        const response = await Axios(config)

        const data = response.data

        setRatings(data)


    }


    const see = (id_lugar,tipo) =>{

        localStorage.setItem("establecimiento",id_lugar)
        localStorage.setItem("tipo",tipo.toLowerCase())

        setSeeBool(true)
    }

    const edit = (id_rating) =>{


        localStorage.setItem("id_rating",id_rating)


        console.log("edit")

        setupdateBool(true)
    }

    useEffect(()=>{
        getReservas()

    },[])

    if(seeBool){
        return(
            <Redirect to="/lugar"/>
        )
    }else if(updateBool){
        return(
            <Redirect to="/rating/edit"/>
        )
    }else{

        return (
            <div id="hero" className="paquetesBlock">

                <div id="pricing" className="block pricingBlock bgGray">
                    <div className="container-fluid">
                        <div className="titleHolder">
                            <h2>Mis Calificaciones</h2>
                            <div className="site-card-wrapper">
                                <Row gutter={[16, 16]}>
                                    {ratings.map(item => {
                                        return (
                                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                                <Card
                                                    hoverable

                                                    actions={[
                                                        <EyeOutlined key="see"
                                                                     onClick={() => see(item.id_lugar, item.tipo)}/>,

                                                        <EditOutlined key="update" onClick={() => edit(item.id_calificacion)}/>,

                                                    ]}

                                                >
                                                    <Meta title={item.nombre}/>

                                                    <Rate disabled defaultValue={item.calificacion} />
                                                    <p>{moment(item.fecha).format("YYYY-MM-DD")}</p>

                                                    <p>{item.comentario}</p>


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
}

export default AppMisRatings;