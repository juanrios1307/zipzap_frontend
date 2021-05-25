import React, {useState,useEffect} from "react";
import {Card, Carousel, Row, Col, Image, Rate} from 'antd';

import Axios from "axios";
import beach from "../../assets/images/beach.jpg";
import { EyeOutlined } from '@ant-design/icons';
import {Redirect} from "react-router-dom";
const { Meta } = Card;



function AppBusquedaEspecifica(props) {


    const [establecimientos,setEstablecimientos]=useState([])


    const gridStyle = {
        textAlign: 'center',
    };
    const [configActual,setconfigActual]=useState(props.config)
    const {config} = props

    const filtrar = async(config) =>{

        setEstablecimientos([])

        var response = await Axios(config)
        var data = response.data

        console.log(data)

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

            console.log(dataImg)

            datArray[i].imagenes=dataImg
        }

        setEstablecimientos(datArray)
    }


    useEffect(() =>{
        if(config != configActual) {
            filtrar(config)
            setconfigActual(config)
        }else{

        }
    })

    useEffect(()=>{
        getEstablecimientos()

    },[])



    const getEstablecimientos = async() =>{

        setEstablecimientos([])
        var url
        var config

        var ciudad= localStorage.getItem('ciudad')

        if(ciudad != undefined) {

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/hotel/ciudad/'

            config = {
                method: 'get',
                url: url + ciudad,
                headers:{
                    'estrellas':0
                }
            };
        }else{
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/hotel/places/'

            config = {
                method: 'get',
                url: url ,

            };

        }


        filtrar(config)
    }


    const [seeBool, setSeeBool]=useState(false);

    const see = (id_lugar,tipo) =>{

        localStorage.setItem("establecimiento",id_lugar)
        localStorage.setItem("tipo",tipo.toLowerCase())

        setSeeBool(true)
    }

    if(seeBool){
        return(
            <Redirect to="/lugar"/>
        )
    }else {

        return (
            <div id="hero" className="busquedaBlock">

                {establecimientos.map(item => {
                    return (
                        <Row gutter={[16, 16]}>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                                <Card
                                    hoverable
                                    style={gridStyle}

                                    actions={[
                                        <EyeOutlined key="select"
                                                     onClick={() => see(item.id_lugar, item.tipo)}/>,

                                    ]}

                                >
                                    <Row gutter={[16, 16]}>

                                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                                            <Meta title={item.nombre}/>
                                            <p>{item.paginaweb}</p>

                                            {item.estrellas &&(
                                                <Rate disabled defaultValue={item.estrellas}/>
                                            )}


                                        </Col>

                                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>

                                            <Carousel autoplay>
                                                {item.imagenes.map(img => {
                                                    return (
                                                        <Image
                                                            src={img.imagen}
                                                            alt={"No Hay Imagenes para Mostrar"}
                                                            width={400}
                                                        />)

                                                })}
                                            </Carousel>

                                        </Col>
                                    </Row>
                                </Card>


                            </Col>


                        </Row>
                    )
                })
                }

            </div>

        );
    }
}

export default AppBusquedaEspecifica;