import React, {useState,useEffect} from "react";
import { Card, Row, Col} from 'antd';

import { DeleteOutlined } from '@ant-design/icons';
import Axios from "axios";

import moment from "moment";
import Swal from "sweetalert2";

const { Meta } = Card;

function AppLugarReservas() {

    const [reservas, setReservas]=useState([]);

    const getReservas = async() =>{

        setReservas([])

        const id=localStorage.getItem("id_reserva")

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/reserva/place/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'get',
            url: url+id,
            headers: {
                'access-token': token
            }
        };

        const response = await Axios(config)

        const data = response.data


        setReservas(data)

    }


    const eliminar =async (id) =>{
        console.log("delete")

        const url='http://localhost:5000/api/reserva/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'delete',
            url: url+ id,
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

            window.location.reload(false)

        }else{
            Swal.fire({
                title: mensaje,

            })

        }



    }


    useEffect(()=>{
        getReservas()

    },[])


        return (
            <div id="hero" className="paquetesBlock">

                <div id="pricing" className="block pricingBlock bgGray">
                    <div className="container-fluid">
                        <div className="titleHolder">
                            <h2>Reservas</h2>
                            <div className="site-card-wrapper">
                                <Row gutter={[16, 16]}>
                                    {reservas.map(item => {
                                        return (
                                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                                <Card
                                                    hoverable

                                                    actions={[

                                                        <DeleteOutlined key="delete"
                                                                        onClick={() => eliminar(item.id_reserva)}/>
                                                    ]}

                                                >
                                                    <Meta title={item.nombre + " " +item.apellido}/>

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

export default AppLugarReservas;