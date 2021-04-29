import React, { useState,useEffect } from "react";
import {Redirect} from "react-router-dom";
import {Anchor, Drawer, Button, Form, AutoComplete, Cascader} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Axios from "axios";

const { Link } = Anchor;

const options = [
    {
        value: 1,
        label: 'Cerrar Sesión',
    },
    {
        value: 2,
        label: 'Mis Establecimientos',
    },
    {
        value: 3,
        label: 'Ver Mis Reservas',
    },
    {
        value: 4,
        label: 'Ver Mis Calificaciones',
    },
];
function AppHeader() {

    const [visible, setVisible] = useState(false);
    const [ciudad, setCiudad] = useState([]);
    const [token, setToken] = useState('');

    const [boolBusqueda, setBoolBusqueda] = useState(false);
    const [boolDash, setBoolDash] = useState(false);
    const [boolReservas, setBoolReservas] = useState(false);
    const [boolRating, setBoolRating] = useState(false);


    const cerrarSesion = () =>{
        localStorage.removeItem("token")

        setToken('')
    }

    const misEstablecimientos = ()=>{
        setBoolDash(true)
    }

    const misReservas = ()=>{
        setBoolReservas(true)
    }

    const misComentarios =()=>{
        setBoolRating(true)
    }

    const onChange =(value) =>{

        if(value[0]===1){
            cerrarSesion()
        }else if(value[0] === 2){
            misEstablecimientos()
        }else if(value[0] === 3){
            misReservas()
        }else if(value[0] === 4){
            misComentarios()
        }
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const ciudades = async() =>{


        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ciudad/'

        const response = await Axios.get(
            url,
        )

        const ciudades = response.data

        for(var i=0;i<ciudades.length;i++){

            ciudad.push(
                new Object({
                    "key":ciudades[i].id_ciudad,
                    "value":ciudades[i].nombre
                })
            )
        }

    }



    const buscar = async(values) => {

        const cityKey = ciudad.find(function (item){
            return item.value == values.city
        })

        localStorage.setItem("city",cityKey.value)
        localStorage.setItem("ciudad",cityKey.key)
        setBoolBusqueda(true)



    }

    useEffect(()=>{
        ciudades()

        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }

    },[])

    if(boolDash){
        return (
            <Redirect to="/dashboard"/>
        )
    }else if(boolReservas){
        return (
            <Redirect to="/dashboard"/>
        )

    }else if(boolRating){
        return (
            <Redirect to="/dashboard"/>
        )
    }else if(boolBusqueda){
        return (
            <Redirect to="/busqueda"/>
        )
    }else {

        return (
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        <a href="/"> ZIPZAP</a>
                    </div>
                    <div className="mobileHidden">
                        <Anchor targetOffset="65">

                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{remember: true}}
                                layout="inline"
                                onFinish={buscar}
                            >
                                <Form.Item
                                    name="city"
                                    rules={[{required: true, message: 'Por favor ingresa una ciudad!'}]}
                                >

                                    <AutoComplete
                                        style={{
                                            width: 200,
                                        }}
                                        options={ciudad}
                                        placeholder="Ciudad"
                                        filterOption={(inputValue, option) =>
                                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                    />


                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Buscar
                                    </Button>
                                </Form.Item>
                            </Form>

                            <Link href="/" title="Home"/>

                            {token && (
                                <Cascader options={options} onChange={onChange}>
                                    <UserOutlined/>
                                </Cascader>

                            )

                            }

                            {!token && (

                                <Link href="/login" title="Iniciar Sesión"/>


                            )}

                            {!token && (

                                <Link href="/signup" title="Registrate"/>


                            )}


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
                                <Link href="/" title="Home"/>
                                <Link href="/login" title="Iniciar Sesión"/>
                                <Link href="/signup" title="Registrate"/>
                            </Anchor>
                        </Drawer>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;