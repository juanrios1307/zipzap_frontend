import React, {useState,useEffect} from "react";
import {Image, Card, Row, Col, Carousel} from 'antd';

import { EditOutlined, DeleteOutlined , EyeOutlined } from '@ant-design/icons';
import Axios from "axios";
import {Redirect} from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

const { Meta } = Card;

function AppMisReservas() {

    const [reservas, setReservas]=useState([]);
    const [seeBool, setSeeBool]=useState(false);

    const getReservas = async() =>{

        setReservas([])

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/users/reservas/'

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


        setReservas(data)


    }


    const eliminar =async (id_lugar) =>{
        console.log("delete")

        const url='http://localhost:5000/api/reservas/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'get',
            url: url+ id_lugar,
            headers: {
                'access-token': token
            }
        };

        const response = await Axios(config)

        const mensaje = response.data.message
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })


        }else{
            Swal.fire({
                title: mensaje,

            })

        }



    }

    const see = (id_lugar,tipo) =>{

        localStorage.setItem("establecimiento",id_lugar)
        localStorage.setItem("tipo",tipo.toLowerCase())

        setSeeBool(true)
    }

    useEffect(()=>{
        getReservas()

    },[])

    if(seeBool){
        return(
            <Redirect to="/lugar"/>
        )
    }else {

        return (
            <div id="hero" className="paquetesBlock">

                <div id="pricing" className="block pricingBlock bgGray">
                    <div className="container-fluid">
                        <div className="titleHolder">
                            <h2>Mis Reservas</h2>
                            <div className="site-card-wrapper">
                                <Row gutter={[16, 16]}>
                                    {reservas.map(item => {
                                        return (
                                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                                <Card
                                                    hoverable

                                                    actions={[
                                                        <EyeOutlined key="select"
                                                                     onClick={() => see(item.id_lugar, item.tipo)}/>,

                                                        <DeleteOutlined key="delete"
                                                                        onClick={() => eliminar(item.id_lugar)}/>
                                                    ]}

                                                >
                                                    <Meta title={item.nombre}/>

                                                    <p>{moment(item.fecha).format("YYYY-MM-DD")}</p>

                                                    <p>{item.notas}</p>


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

export default AppMisReservas;