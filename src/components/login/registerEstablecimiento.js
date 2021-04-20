import React, { useState,useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    AutoComplete,
    Button,

} from 'antd';


import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import moment from "moment";
import AppGoogleMaps from "./Map";
import AppRegistrationBar from "./registerLugar/registerBar";
import AppRegistrationEvento from "./registerLugar/registerEvento";
import AppRegistrationHotel from "./registerLugar/registerHotel";
import AppRegistrationMonumento from "./registerLugar/registerMonumento";
import AppRegistrationParque from "./registerLugar/registerParque";
import AppRegistrationRestaurante from "./registerLugar/registerRestaurante";
import AppRegistrationTeatro from "./registerLugar/registerTeatro";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterEstablecimiento = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const [ciudad, setCiudad] = useState([]);
    const [ambiente, setAmbiente] = useState([]);
    const [tipos, setTipos] = useState(['Bar','Evento','Hotel','Monumento','Parque','Restaurante','Teatro']);
    const [tipo, setTipo] = useState('B')

    const onFinish=(values) =>{
        Register(values)
    }

    const ciudades = async() =>{

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ciudad/'

        const response = await Axios.get(
            url,
            )

        const ciudades = response.data
        setCiudad(ciudades)
        console.log(ciudades)
    }

    const ambientes = async() =>{

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ambiente/'

        const response = await Axios.get(
            url,
        )

        const ambientes = response.data
        setAmbiente(ambientes)
        console.log(ambientes)
    }

    useEffect(()=>{
        ambientes()
        ciudades()
    },[])

    const Register = async(values) => {

        const token = localStorage.getItem("token")

        values.fecha_subida=moment().format('YYYY-MM-DD h:mm:ss')
        values.fecha_ultima_edicion=moment().format('YYYY-MM-DD h:mm:ss')
        values.logitud=parseFloat(localStorage.getItem("long"))
        values.latitud=parseFloat(localStorage.getItem("lat"))

        console.log(values)

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/lugar/'

        const config = {
            method: 'post',
            url: url ,
            headers: {
                'access-token': token
            },
            data: values

        };

        const response = await Axios(config)

        const mensaje = response.data.message
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            //setBool(true)
            //window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }



    if(bool){
        return(
            <Redirect to="/"/>
        )
    }else if(localStorage.getItem("token")){



        const onWebsiteChange = (value) => {
            if (!value) {
                setAutoCompleteResult([]);
            } else {
                setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
            }
        };

        const websiteOptions = autoCompleteResult.map((website) => ({
            label: website,
            value: website,
        }));





        return (
            <div id="hero" className="registerBlock all">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Registrar Establecimiento</h2>
                    </div>

                    <div className="block">
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}

                            scrollToFirstError
                        >

                            <Form.Item
                                name="nombre"
                                label="Nombre "
                                tooltip="What do you want others to call you?"
                                rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="correo"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="telefono"
                                label="Celular "
                                rules={[{required: true, message: 'Please input your phone number!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="paginaweb"
                                label="Website"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input website!',
                                    },
                                ]}
                            >
                                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                                    <Input />
                                </AutoComplete>
                            </Form.Item>

                            <Form.Item
                                name="ciudad"
                                label="ciudad "
                                rules={[{required: true, message: 'Por Favor Elije un Ambiente!'}]}>
                                <Select
                                    showSearch
                                    placeholder="Busca para Seleccionar Tu Ciudad"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                    filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }>

                                    {ciudad.map(i =>(
                                        <Option key={i.id_ciudad}>{i.nombre}</Option>
                                    ))}
                                </Select>
                            </Form.Item>


                            <Form.Item
                                name="ambiente"
                                label="Ambiente "
                                rules={[{required: true, message: 'Por Favor Elije un Ambiente!'}]}>
                                <Select>
                                    {ambiente.map(i =>(
                                        <Option key={i.id_ambiente}>{i.nombre}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="tipo"
                                label="Tipo "
                                rules={[{required: true, message: 'Por Favor Elije El tipo de tu Establecimiento!'}]}>
                                <Select onChange={e=>setTipo(e)}>
                                    {tipos.map(i =>(
                                        <Option key={i} value={i}>{i}</Option>
                                    ))}
                                </Select>
                            </Form.Item>



                            <div className="divMap">
                                <AppGoogleMaps />
                            </div>


                            {tipo=="Bar" && (
                                   <AppRegistrationBar/>
                               )}

                            {tipo=="Evento" && (
                                    <AppRegistrationEvento/>
                                )}

                            {tipo=="Hotel" && (
                                <AppRegistrationHotel/>
                            )}

                            {tipo=="Monumento" && (
                                <AppRegistrationMonumento/>
                            )}
                            {tipo=="Parque" && (
                                <AppRegistrationParque/>
                            )}

                            {tipo=="Restaurante" && (
                                <AppRegistrationRestaurante/>
                            )}

                            {tipo=="Teatro" && (
                                <AppRegistrationTeatro/>
                            )}

                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>

                        </Form>

                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Por Favor Inicia Sesion </h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default RegisterEstablecimiento