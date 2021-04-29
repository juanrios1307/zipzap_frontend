import React, {useState,useEffect} from "react";
import {Card, Carousel, Row, Col, Image} from 'antd';

import Axios from "axios";
import beach from "../../assets/images/beach.jpg";
const { Meta } = Card;

function PlanEst(props) {


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
            url = 'http://localhost:5000/api/restaurante/best'

            config = {
                method: 'get',
                url: url,
                headers: {

                }
            };

        }else {
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            url = 'http://localhost:5000/api/restaurante/ciudad_ambiente'

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ciudad': ciudad,
                    'ambiente': ambiente
                }
            };
        }

        console.log(ciudad)
        console.log(ambiente)

        response = await Axios(config)
        data = response.data

        console.log(data)

        const places =data
        const est1=[]

        console.log(data)
        console.log(places)

        while(places.length>0) {
            var lugar = {}
            var i = 0

            while (places.length > (i + 1) && places[i].id_lugar === places[i + 1].id_lugar) {
                i++

            }
            lugar = places[0]

            i++


            const imagenes = []

            var j = 0

            while (j < i) {
                imagenes.push(places.shift().imagen)
                j++

            }

            lugar.imagen = imagenes

            est1.push(lugar)

        }

        setEstablecimientos(est1)

        console.log(establecimientos)
    }

    useEffect(()=>{
        getEstablecimientos()

    },[])

    return (
        <div id="hero" className="planBlock">
            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Restaurantes</h2>
                        <div className="site-card-wrapper">
                            <Carousel>
                                {establecimientos.map(item => {
                                    return (
                                        <Row gutter={[16, 16]}>
                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
                                                <Card
                                                    hoverable
                                                >
                                                    <Meta title={item.nombre} />
                                                    <p>{item.paginaweb}</p>

                                                    <Carousel autoplay>
                                                        {item.imagen.map(img =>{
                                                            return(
                                                                <Image
                                                                    src={img?img:beach}
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

export default PlanEst;