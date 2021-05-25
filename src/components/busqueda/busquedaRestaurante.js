import React, {useState,useEffect} from "react";
import {Card, Carousel, Row, Col, Image} from 'antd';

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
        var response
        var data

        var ciudad= localStorage.getItem('ciudad')

        if(ciudad != undefined) {

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/restaurante/ciudad/'

            config = {
                method: 'get',
                url: url + ciudad,

            };
        }else{
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/restaurante/places/'

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
                                            <p></p>

                                            <Image src={item.menu} alt={"No img"} width={300}/>
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