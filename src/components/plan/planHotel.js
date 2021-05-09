import React, {useState,useEffect} from "react";
import {Card, Carousel, Row, Col, Image} from 'antd';

import Axios from "axios";
import beach from "../../assets/images/beach.jpg";
import { EyeOutlined } from '@ant-design/icons';
import {Redirect} from "react-router-dom";
const { Meta } = Card;

function PlanHotel(props) {


    const [establecimientos,setEstablecimientos]=useState([])

    const getEstablecimientos = async() =>{

        setEstablecimientos([])
        var url
        var config
        var response
        var data

        var ciudad= localStorage.getItem('ciudad')
        var ambiente= localStorage.getItem('plan')


        if(ambiente == 0){
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/hotel/best'

            config = {
                method: 'get',
                url: url,
                headers: {

                }
            };

        }else {
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/hotel/ciudad_ambiente'

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ciudad': ciudad,
                    'ambiente': ambiente,
                    'estrellas':0
                }
            };
        }

        console.log(ciudad)
        console.log(ambiente)

        response = await Axios(config)
        data = response.data

        console.log(data)

        var urlimg = 'http://localhost:5000/api/imagen/place/'
        var urlhabs = 'http://localhost:5000/api/habitacion/place/'

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

            var configHabs = {
                method: 'get',
                url: urlhabs+data[i].id_lugar,

            };

            var habs = await Axios(configHabs)
            var dataHabs = habs.data

            console.log(dataHabs)

            datArray[i].habitaciones=dataHabs

        }


        setEstablecimientos(datArray)
        console.log(establecimientos)
    }

    useEffect(()=>{
        getEstablecimientos()

    },[])
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
            <div id="hero" className="planBlock">
                <div id="pricing" className="block pricingBlock bgGray">
                    <div className="container-fluid">
                        <div className="titleHolder">
                            <h2>Hoteles</h2>
                            <div className="site-card-wrapper">
                                <Carousel>
                                    {establecimientos.map(item => {
                                        return (
                                            <Row gutter={[16, 16]}>
                                                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                                                    <Card
                                                        hoverable

                                                        actions={[
                                                            <EyeOutlined key="select"
                                                                         onClick={() => see(item.id_lugar, item.tipo)}/>,

                                                        ]}

                                                    >
                                                        <Meta title={item.nombre}/>
                                                        <p>{item.paginaweb}</p>

                                                         <Carousel autoplay>
                                                            {item.imagenes.map(img => {
                                                                return (
                                                                    <Image
                                                                        src={img.imagen}
                                                                        alt={"No Hay Imagenes para Mostrar"}
                                                                        width={400}
                                                                    />
                                                                )

                                                            })}
                                                        </Carousel>

                                                    </Card>


                                                </Col>
                                            </Row>
                                        )
                                    })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanHotel;