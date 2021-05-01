import React, {useState,useEffect} from "react";
import {Image, Card, Row, Col, Carousel} from 'antd';

import { EditOutlined, DeleteOutlined , EyeOutlined } from '@ant-design/icons';
import Axios from "axios";
import {Redirect} from "react-router-dom";

const { Meta } = Card;

function AppMisEstablecimientos() {

    const [establecimientos, setEstablecimientos]=useState([]);
    const [bool, setBool]=useState(false);
    const [seeBool, setSeeBool]=useState(false);
    const [updateBool, setupdateBool]=useState(false);
    const [eliminarBool, setEliminarBool]=useState(false);

    const getEstablecimientos = async() =>{

        setEstablecimientos([])

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/users/places/'

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

        const places =data
        const est1=[]

        while(places.length>0){
            var lugar={}
            var i=0

            while(places.length >(i+1) && places[i].id_lugar === places[i+1].id_lugar){
                i++

            }
            lugar=places[0]

            i++


            const imagenes=[]

            var j=0

            while(j<i){
                imagenes.push(places.shift().imagen)
                j++

            }


            lugar.imagen=imagenes

            est1.push(lugar)

        }

        setEstablecimientos(est1)


    }

    const edit = () =>{
        console.log("edit")

        setupdateBool(true)
    }

    const eliminar = (id_lugar) =>{
        console.log("delete")

        setEliminarBool(true)
    }

    const see = (id_lugar,tipo) =>{

        localStorage.setItem("establecimiento",id_lugar)
        localStorage.setItem("tipo",tipo.toLowerCase())

        setSeeBool(true)
    }

    useEffect(()=>{
        getEstablecimientos()

    },[])

    if(seeBool){
        return(
            <Redirect to="/lugar"/>
        )
    }else  if (updateBool){

    }else if(eliminarBool){

    }else {

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
                                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                                <Card
                                                    hoverable

                                                    actions={[
                                                        <EyeOutlined key="select"
                                                                     onClick={() => see(item.id_lugar, item.tipo)}/>,
                                                        <EditOutlined key="update" onClick={() => edit}/>,
                                                        <DeleteOutlined key="delete"
                                                                        onClick={() => eliminar(item.id_lugar)}/>
                                                    ]}

                                                >

                                                    <Meta title={item.nombre}/>

                                                    <p>{item.paginaweb}</p>
                                                    <p>{item.tipo}</p>

                                                    <Carousel autoplay>
                                                        {item.imagen.map(img => {
                                                            return (
                                                                <Image
                                                                    src={img}
                                                                    alt="No Tienes Imagenes Para Mostrar"
                                                                    width={400}
                                                                />
                                                            )

                                                        })}
                                                    </Carousel>

                                                </Card>


                                            </Col>
                                        )
                                    })
                                    }


                                </Row>

                                <a href="/signup/place" className="a">Registra Tu Empresa</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AppMisEstablecimientos;