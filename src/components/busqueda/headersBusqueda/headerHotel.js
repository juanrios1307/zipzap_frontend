import React, { useState,useEffect } from "react";

import {
    Anchor,
    Drawer,
    Button,
    Form,
    Input,
    Row,
    Col,
    Select,
    Rate
} from 'antd';
import Axios from "axios";

const { Link } = Anchor;
const { Option } = Select;

function AppHeaderBar(props) {

    const [visible, setVisible] = useState(false);
    const [ambientes, setAmbientes] = useState([]);
    const [token, setToken] = useState('');




    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const getAmbientes = async() =>{

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ambiente/'

        const response = await Axios.get(
            url,
        )

        const data = response.data
        setAmbientes(data)

    }

    const {filter} = props

    const filtrar = async(values) => {

        var ciudad= localStorage.getItem('ciudad')
        var ambiente=values.ambiente
        var nombre= values.nombre
        var estrellas

        if(values.estrellas == undefined){
            estrellas = 0
        }else{
            estrellas = values.estrellas
        }

        var url
        var config

        console.log(values)

        if(ciudad != undefined && ambiente != undefined && (nombre != undefined && nombre != "")){
            url = 'http://localhost:5000/api/hotel/nombre_ciudad_ambiente/'

            config = {
                method: 'get',
                url: url ,
                headers:{
                    'ciudad': ciudad,
                    'ambiente': ambiente,
                    'nombre': nombre,
                    'estrellas' :estrellas
                }

            };

        }else if(ciudad != undefined && ambiente != undefined){

            url = 'http://localhost:5000/api/hotel/ciudad_ambiente'

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ciudad': ciudad,
                    'ambiente': ambiente,
                    'estrellas' :estrellas
                }
            };

        }else if(ciudad != undefined && (nombre != undefined && nombre != "")){

            url = 'http://localhost:5000/api/hotel/nombre_ciudad'

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ciudad': ciudad,
                    'nombre': nombre,
                    'estrellas' :estrellas
                }
            };

        }else if(ambiente != undefined && (nombre != undefined && nombre != "")){

            url = 'http://localhost:5000/api/hotel/nombre_ambiente'

            console.log(nombre)

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ambiente': ambiente,
                    'nombre': nombre,
                    'estrellas' :estrellas
                }
            };

        }else if(ciudad != undefined){

            url = 'http://localhost:5000/api/hotel/ciudad/'

            config = {
                method: 'get',
                url: url + ciudad,
                headers:{
                    'estrellas' :estrellas
                }

            };

        }else if(ambiente != undefined){

            url = 'http://localhost:5000/api/hotel/ambiente/'

            config = {
                method: 'get',
                url: url + ambiente,
                headers:{
                    'estrellas' :estrellas
                }
            };

        }else if((nombre != undefined && nombre != "")){

            url = 'http://localhost:5000/api/hotel/nombre/'

            config = {
                method: 'get',
                url: url + nombre,
                headers:{
                    'estrellas' :estrellas
                }
            };

        }else{

            url = 'http://localhost:5000/api/hotel/estrellas/'

            config = {
                method: 'get',
                url: url ,
                headers:{
                    'estrellas' :estrellas
                }
            };

        }

        console.log("config header: "+JSON.stringify(config))

        filter(config)


        console.log(values)

    }



    useEffect(()=>{
        getAmbientes()

        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }

    },[])

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <a>  Hoteles</a>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset="1000">

                        <Form
                            name="filter_form"
                            className="filter-form"
                            initialValues={{ remember: true }}
                            layout='vertical'
                            onFinish={filtrar}
                            style={{
                                width:1000
                            }}
                        >

                            <Row>
                                <Col span={5}>

                                    <Form.Item
                                        name="nombre"
                                        label ="Nombre"
                                        rules={[{ required: false}]}
                                    >

                                        <Input
                                            style={{
                                                width: 150,
                                            }}
                                            placeholder="Hotel"

                                        />
                                    </Form.Item>

                                </Col>

                                <Col span={5}>

                                    <Form.Item
                                        name="estrellas"
                                        label="Estrellas "

                                        rules={[{required: false,}]}
                                    >
                                        <Rate/>
                                    </Form.Item>

                                </Col>

                                <Col span={5}>
                                    <Form.Item
                                        name="ambiente"
                                        label="Ambiente "
                                        rules={[{required: false}]}>
                                        <Select>
                                            {ambientes.map(i =>(
                                                <Option key={i.id_ambiente}>{i.nombre}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={2}>

                                    <Form.Item
                                        label=" ">
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Aplicar
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>




                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Link href="/" title="Home" />
                            <Link href="/login" title="Iniciar Sesión" />
                            <Link href="/signup" title="Registrate" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default AppHeaderBar;