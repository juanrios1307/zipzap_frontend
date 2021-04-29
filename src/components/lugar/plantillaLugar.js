import React, {useState,useEffect} from "react";
import {Card, Row, Col, Image, Carousel, Rate, Form} from 'antd';


import travel from "../../assets/images/travel.png"
import planMejorRankeado from "../../assets/images/planMejorRankeado.jpg"
import rating from '../../assets/images/rating.png'
import monumento from "../../assets/images/monumento.jpg";
import parque from "../../assets/images/parque.jpg";
import evento from "../../assets/images/evento.jpg";


import AppGoogleMapsLugar from "./MapLugar";
import AppRatingForm from "./calificar";
import AppReservaForm from "./reservar";
import Axios from "axios";

const { Meta } = Card;

function AppLugar() {


    const [tipo, setTipo] = useState('');

    const [id, setId] = useState(0);

    const [nombre, setNombre] = useState('');
    const [imagenes, setImagenes]=useState([])
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [longitud, setLongitud] = useState('');
    const [latitud, setLatitud] = useState('');
    const [paginaWeb, setPaginaWeb] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [ambiente, setAmbiente] = useState('');

    const [carta,setCarta] = useState('')

    const [descripcion,setDescripcion] = useState('')
    const [capacidad,setCapacidad] = useState(0)

    const [estrellas,setEstrellas] = useState(0)
    const [tiposhabs, settiposhabs]=useState([1,2,3,4,5])
    const [valorHabs, setvalorHabs]=useState([100,200,300])
    const [disponibilidadHabs, setdisponibilidadHabs]=useState([10,20,30])

    const [historia,setHistoria] = useState('')

    const [menu,setMenu] = useState('')

    const [cartelera,setCartelera] = useState('')

    const getData = async() =>{
        var tipo=(localStorage.getItem('tipo'))
        setTipo(tipo)

        var id =(localStorage.getItem('id'))
        setId(id)

        console.log("tipo: "+tipo+" _::_ id: "+id)
        console.log("tipo1: "+tipo+" _::_ id1: "+id)

        if(tipo==="bar"){
            console.log("bar")
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/bar/places/'

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

            console.log(data)

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)

                setCiudad(data[0].ciudad)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setCarta(data[0].carta)
            }

        }else if(tipo === "evento"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/evento/places/'

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

            console.log(data)

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)

                setCiudad(data[0].ciudad)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
                setCapacidad(data[0].capacidad)
            }
        }else if(tipo === "hotel"){


        }else if(tipo==="monumento"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/monumento/places/'

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

            console.log(data)

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)

                setCiudad(data[0].ciudad)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
                setHistoria(data[0].historia)
            }
        }else if(tipo === "parque"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/parque/places/'

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

            console.log(data)

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)

                setCiudad(data[0].ciudad)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
            }
        }else if(tipo === "restaurante"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/restaurante/places/'

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

            console.log(data)

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)

                setCiudad(data[0].ciudad)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setMenu(data[0].menu)
            }
        }else if (tipo=== "teatro"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/teatro/places/'

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

            console.log(data)

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)

                setCiudad(data[0].ciudad)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setCartelera(data[0].cartelera)
                setCapacidad(data[0].capacidad)
            }
        }

    }

    useEffect(()=>{
        getData()

    },[])

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

                                                src={item}
                                            />
                                        ))}

                                    </Carousel>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>

                                    {tipo==="bar" && (
                                        <div>
                                            <img src={carta} alt="imagen carta" />
                                        </div>
                                    )}

                                    {tipo==="evento" && (

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={evento} width={200} />}

                                        >
                                            <Meta title={"Evento"} />

                                            <p>{"Descripción Evento: "+descripcion}</p>
                                            <h3>{"Capacidad Evento: "+capacidad}</h3>
                                        </Card>

                                    )}

                                    {tipo==="hotel" && (
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
                                    {tipo==="monumento" && (

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={monumento} width={200} />}

                                        >
                                            <Meta title={"Monumento"} />

                                            <p>{"Descripción Monumentos: "+descripcion}</p>
                                            <h3>{"Historia Monumento: "+historia}</h3>
                                        </Card>
                                    )}
                                    {tipo==="parque" && (

                                        <Card
                                            hoverable
                                            cover={<img alt="Test" src={parque} width={200} />}

                                        >
                                            <Meta title={"Parque"} />

                                            <p>{"Descripción Parque: "+descripcion}</p>
                                        </Card>

                                    )}
                                    {tipo==="restaurante" && (
                                        <div>
                                            <Image src={menu} alt="imagen menu" />
                                        </div>
                                    )}
                                    {tipo==="teatro" && (
                                        <div>
                                            <Image src={cartelera} alt="imagen carta" />
                                            <h3>{"Capacidad Evento: "+capacidad}</h3>
                                        </div>
                                    )}

                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>

                                    <AppGoogleMapsLugar lugar={new Object({"lat":parseFloat(latitud),"lng":parseFloat(longitud)})} />

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

                                        <AppReservaForm />


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>


                                        <AppRatingForm />


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