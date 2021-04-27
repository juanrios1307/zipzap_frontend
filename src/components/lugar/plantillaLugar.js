import React, {useState} from "react";
import {Card, Row, Col, Image, Carousel, Rate, Form} from 'antd';


import travel from "../../assets/images/travel.png"
import airplane from "../../assets/images/promo.jpg"
import planMejorRankeado from "../../assets/images/planMejorRankeado.jpg"
import rating from '../../assets/images/rating.png'

import hotel from "../../assets/images/hotel.jpg";
import restaurante from "../../assets/images/restaurante.jpg";
import bar from "../../assets/images/bar.jpg";
import monumento from "../../assets/images/monumento.jpg";
import parque from "../../assets/images/parque.jpg";
import cine from "../../assets/images/cine.jpg";
import evento from "../../assets/images/evento.jpg";


import AppGoogleMapsLugar from "./MapLugar";

const { Meta } = Card;

function AppLugar() {


    const [tipo, setTipo] = useState('Hotel');


    const [nombre, setNombre] = useState('hotelP');
    const [imagenes, setImagenes]=useState([1,2,3])
    const [correo, setCorreo] = useState('hotelP@gmail.com');
    const [telefono, setTelefono] = useState('3206795630');
    const [paginaWeb, setPaginaWeb] = useState('hotelp.com');
    const [ciudad, setCiudad] = useState('Cartagena');

    const [carta,setCarta] = useState('imagen carta')

    const [descripcion,setDescripcion] = useState('Descripcion')
    const [capacidad,setCapacidad] = useState(100)

    const [estrellas,setEstrellas] = useState(4)
    const [tiposhabs, settiposhabs]=useState([1,2,3])
    const [valorHabs, setvalorHabs]=useState([100,200,300])
    const [disponibilidadHabs, setdisponibilidadHabs]=useState([10,20,30])

    const [historia,setHistoria] = useState('Historia larga')

    const [menu,setMenu] = useState('imagen menu')

    const [cartelera,setCartelera] = useState('imagen cartelera')



    return (
        <div id="hero" className="paquetesBlock">

            <div id="pricing" className="block pricingBlock bgGray">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>{nombre}</h2>
                        <div className="site-card-wrapper">
                            <Row gutter={[16, 16]}>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
                                    <Carousel autoplay>
                                        {imagenes.map(item=>(
                                            <Image

                                                src={planMejorRankeado}
                                            />
                                        ))}

                                    </Carousel>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>

                                    {tipo==="Bar" && (
                                        <div>
                                            <img src={carta} alt="imagen carta" />
                                        </div>
                                    )}

                                    {tipo==="Evento" && (

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={evento} width={200} />}

                                        >
                                            <Meta title={"Evento"} />

                                            <p>{"Descripción Evento: "+descripcion}</p>
                                            <h3>{"Capacidad Evento: "+capacidad}</h3>
                                        </Card>

                                    )}

                                    {tipo==="Hotel" && (
                                        <div>

                                            <Rate defaultValue = {estrellas} disabled/>

                                            {tiposhabs.map((item,i)=>(
                                                <div>
                                                    <h2>{item}</h2>
                                                    <p>{"Precio: "+valorHabs[i]}</p>
                                                    <p>{"Disponibilidad: "+disponibilidadHabs[i] + " habitaciones"}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {tipo==="Monumento" && (

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={monumento} width={200} />}

                                        >
                                            <Meta title={"Monumento"} />

                                            <p>{"Descripción Monumentos: "+descripcion}</p>
                                            <h3>{"Historia Monumento: "+historia}</h3>
                                        </Card>
                                    )}
                                    {tipo==="Parque" && (

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={parque} width={200} />}

                                        >
                                            <Meta title={"Parque"} />

                                            <p>{"Descripción Parque: "+descripcion}</p>
                                        </Card>

                                    )}
                                    {tipo==="Restaurante" && (
                                        <div>
                                            <Image src={menu} alt="imagen menu" />
                                        </div>
                                    )}
                                    {tipo==="Teatro" && (
                                        <div>
                                            <Image src={cartelera} alt="imagen carta" />
                                            <h3>{"Capacidad Evento: "+capacidad}</h3>
                                        </div>
                                    )}

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>

                                    <AppGoogleMapsLugar lugar={new Object({"lat":6.57,"lng":-75.73})} />

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={travel} width={200} />}

                                        >
                                            <Meta title={"Datos De Contacto"} />
                                            <p>{"Correo: "+ correo}</p>
                                            <p>{"Telefono: "+ telefono}</p>
                                            <p> {paginaWeb} </p>
                                            <p>{"Ciudad: "+ ciudad}</p>
                                        </Card>


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={airplane} />}

                                        >
                                            <Meta title={"Reserva"} />
                                        </Card>


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>


                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={rating} />}

                                        >
                                            <Meta title={"Calificar"} />
                                        </Card>


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>


                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={rating} />}

                                        >
                                            <Meta title={"Comentarios"} />
                                        </Card>


                                </Col>

                            </Row>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AppLugar;