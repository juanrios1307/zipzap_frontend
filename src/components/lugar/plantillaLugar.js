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
import AppComentarios from "./Calificaciones";

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
    const [tiposhabs, settiposhabs]=useState([])
    const [valorHabs, setvalorHabs]=useState([])
    const [disponibilidadHabs, setdisponibilidadHabs]=useState([])
    const [bool, setBool] = useState('');

    const [historia,setHistoria] = useState('')

    const [menu,setMenu] = useState('')

    const [cartelera,setCartelera] = useState('')


    const getCiudades = async() =>{


        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ciudad/'

        const response = await Axios.get(
            url,
        )

        const data = response.data

        return data

    }

    const getAmbientes = async() =>{

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ambiente/'

        const response = await Axios.get(
            url,
        )

        const data = response.data

        return data

    }

    const getCiudad_Ambiente =async (id_ciudad,id_ambiente) => {

        const ciudades=await getCiudades()
        const ambientes=await getAmbientes()

        setCiudad(ciudades.find(element => element.id_ciudad === id_ciudad).nombre)
        setAmbiente(ambientes.find(element => element.id_ambiente === id_ambiente).nombre)
    }

    const getData = async() =>{
        var tipo=(localStorage.getItem('tipo'))
        setTipo(tipo)

        var id =(localStorage.getItem('establecimiento'))
        setId(id)

        await getAmbientes()
        await getCiudades()

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setCarta(data[0].carta)
            }

        }
        else if(tipo === "evento"){

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
                setCapacidad(data[0].capacidad)
            }
        }
        else if(tipo === "hotel"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/hotel/places/'

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setEstrellas(data[0].estrellas)


                await getHabs(data[0].id_lugar)


            }

        }
        else if(tipo==="monumento"){

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
                setHistoria(data[0].historia)
            }
        }
        else if(tipo === "parque"){

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
            }
        }
        else if(tipo === "restaurante"){

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setMenu(data[0].menu)
            }
        }
        else if (tipo=== "teatro"){

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

                getCiudad_Ambiente(data[0].ciudad,data[0].ambiente)

                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setCartelera(data[0].cartelera)
                setCapacidad(data[0].capacidad)
            }
        }

    }

    const getHabs = async (id_lugar)=> {
        var urlhabs = 'http://localhost:5000/api/habitacion/place/'

        var configHabs = {
            method: 'get',
            url: urlhabs + id_lugar,

        };

        var habs = await Axios(configHabs)
        var dataHabs = habs.data

        console.log(dataHabs)

        for (var i = 0; i < dataHabs.length; i++) {
            tiposhabs.push(dataHabs[i].tipo)
            valorHabs.push(dataHabs[i].valor)
            disponibilidadHabs.push(dataHabs[i].disponibilidad)
        }

        setBool(true)
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
                                            <Image src={carta} alt="imagen carta" />
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
                                            {estrellas!=0 &&(

                                                <Rate defaultValue = {estrellas} disabled/>
                                                )}


                                            {tiposhabs.map((item,i)=>(
                                                    <Card
                                                        hoverable>

                                                        <Meta title={item} />

                                                        <p>{"Precio: "+valorHabs[i]}</p>
                                                        <p>{"Disponibilidad: "+disponibilidadHabs[i] + " habitaciones"}</p>
                                                    </Card>
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

                                    <AppGoogleMapsLugar lugar={new Object({lat:latitud,lng:longitud})} />

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
                                            <p>{"Ambiente: "+ ambiente}</p>
                                        </Card>


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>

                                        <AppReservaForm />


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>


                                        <AppRatingForm />


                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }}>


                                      <AppComentarios />

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