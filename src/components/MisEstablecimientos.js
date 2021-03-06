import React, {useState,useEffect} from "react";
import {Image, Card, Row, Col, Carousel} from 'antd';

import { EditOutlined, DeleteOutlined , EyeOutlined, BookOutlined } from '@ant-design/icons';
import Axios from "axios";
import {Redirect} from "react-router-dom";
import Swal from "sweetalert2";

const { Meta } = Card;

function AppMisEstablecimientos() {

    const [establecimientos, setEstablecimientos]=useState([]);
    const [bool, setBool]=useState(false);
    const [seeBool, setSeeBool]=useState(false);
    const [updateBool, setupdateBool]=useState(false);
    const [reservasBool, setReservasBool]=useState(false);

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

        var response = await Axios(config)
        var data = response.data

        var urlimg = 'http://localhost:5000/api/imagen/place/'
        var datArray=[]


        for(var i=0;i<data.length;i++){

            datArray.push(data[i])

            var configImg = {
                method: 'get',
                url: urlimg+data[i].id_lugar,
            };

            var images = await Axios(configImg)
            var dataImg = images.data

            datArray[i].imagenes=dataImg
        }

        setEstablecimientos(datArray)

    }

    const edit = (id_lugar,tipo) =>{
        console.log("edit")

        localStorage.setItem("edit_id",id_lugar)
        localStorage.setItem("tipo",tipo.toLowerCase())


        setupdateBool(true)
    }

    const eliminar = async (id_lugar,tipo) =>{

        var url

        console.log(tipo)

        url='http://localhost:5000/api/lugar/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'delete',
            url: url+ id_lugar,
            headers: {
                'access-token': token,
                'tipo':tipo
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

    const see = (id_lugar,tipo) =>{

        localStorage.setItem("establecimiento",id_lugar)
        localStorage.setItem("tipo",tipo.toLowerCase())

        setSeeBool(true)
    }

    const reservas = (id_lugar) =>{
        localStorage.setItem("id_reserva",id_lugar)

        setReservasBool(true)
    }

    useEffect(()=>{
        getEstablecimientos()

    },[])

    if(seeBool){
        return(
            <Redirect to="/lugar"/>
        )
    }else  if (updateBool) {

        return(
            <Redirect to="/lugar/edit"/>
        )

    }else if(reservasBool){
        return(
            <Redirect to="/lugar/reservas"/>
        )
    }else {

        return (
            <div id="hero" className="paquetesBlock">

                <div id="pricing" className="block pricingBlock bgGray">
                    <div className="container-fluid">
                        <div className="titleHolder">
                            <h2>Mis Establecimientos</h2>
                            <div className="site-card-wrapper">
                                <Row gutter={[16, 16]}>

                                    <a href="/signup/place" className="a">Registra Tu Empresa</a>

                                    {establecimientos && establecimientos.map(item => {
                                        return (
                                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>

                                                <Card
                                                    hoverable

                                                    actions={[
                                                        <EyeOutlined key="select"
                                                                     onClick={() => see(item.id_lugar, item.tipo)}/>,
                                                        <EditOutlined key="update" onClick={() => edit(item.id_lugar,item.tipo)}/>,
                                                        <DeleteOutlined key="delete"
                                                                        onClick={() => eliminar(item.id_lugar,item.tipo.toLowerCase())}/>,
                                                        <BookOutlined key="books"
                                                            onClick={() => reservas(item.id_lugar)}/>
                                                    ]}

                                                >

                                                    <Meta title={item.nombre}/>

                                                    <p>{item.paginaweb}</p>
                                                    <p>{item.tipo}</p>

                                                    <Carousel autoplay>
                                                        {item.imagenes.map(img => {
                                                            return (
                                                                <Image
                                                                    src={img.imagen}
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