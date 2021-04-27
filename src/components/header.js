import React, { useState,useEffect } from "react";

import {Anchor, Drawer, Button, Form, AutoComplete, Cascader} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Axios from "axios";

const { Link } = Anchor;

const options = [
    {
        value: 'cerrarSesion',
        label: 'Cerrar Sesión',
    },
    {
        value: 'registrarEstablecimiento',
        label: 'Registrar Establecimiento',
    },
    {
        value: 'verReservas',
        label: 'Ver Mis Reservas',
    },
    {
        value: 'verComentarios',
        label: 'Ver Mis Calificaciones',
    },
];
function AppHeader() {

    const [visible, setVisible] = useState(false);
    const [ciudad, setCiudad] = useState([]);
    const [token, setToken] = useState('');

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
                    "value":ciudades[i].nombre
                })
            )
        }

        console.log(ciudad)
    }



    const buscar = async() => {

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ciudad/'

        const response = await Axios.get(
            url,
        )

        const ciudades = response.data


        console.log(ciudades)

    }

    useEffect(()=>{
        ciudades()

        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }

    },[])

    return (
      <div className="container-fluid">
          <div className="header">
              <div className="logo">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  <a href="/">  ZIPZAP</a>
              </div>
              <div className="mobileHidden">
                  <Anchor targetOffset="65">

                      <Form
                          name="normal_login"
                          className="login-form"
                          initialValues={{ remember: true }}
                          layout="inline"
                          onFinish={buscar}
                      >
                          <Form.Item
                              name="city"
                              rules={[{ required: true, message: 'Por favor ingresa una ciudad!' }]}
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

                      <Link href="/" title="Home" />

                      {token && (
                          <Cascader options={options} >
                                 <UserOutlined />
                          </Cascader>

                      )

                      }

                      {!token && (

                              <Link href="/login" title="Iniciar Sesión" />


                      )}

                      {!token && (

                          <Link href="/signup" title="Registrate" />


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

export default AppHeader;