import React, { useState,useEffect } from "react";

import {
    Anchor,
    Drawer,
    Button,
    Form,
    Input,
    Slider,
    Row,
    Col,
    Select,
} from 'antd';
import Axios from "axios";

const { Link } = Anchor;
const { Option } = Select;

function AppHeaderTeatro(props) {

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

        var url
        var config


        if(ciudad != undefined && ambiente != undefined && (nombre != undefined && nombre != "")){
            url = 'http://localhost:5000/api/teatro/nombre_ciudad_ambiente/'

            config = {
                method: 'get',
                url: url ,
                headers:{
                    'ciudad': ciudad,
                    'ambiente': ambiente,
                    'nombre': nombre
                }

            };

        }else if(ciudad != undefined && ambiente != undefined){

            url = 'http://localhost:5000/api/teatro/ciudad_ambiente'

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ciudad': ciudad,
                    'ambiente': ambiente
                }
            };

        }else if(ciudad != undefined && (nombre != undefined && nombre != "")){

            url = 'http://localhost:5000/api/teatro/nombre_ciudad'

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ciudad': ciudad,
                    'nombre': nombre
                }
            };

        }else if(ambiente != undefined && (nombre != undefined && nombre != "")){

            url = 'http://localhost:5000/api/teatro/nombre_ambiente'

            console.log(nombre)

            config = {
                method: 'get',
                url: url,
                headers: {
                    'ambiente': ambiente,
                    'nombre': nombre
                }
            };

        }else if(ciudad != undefined){

            url = 'http://localhost:5000/api/teatro/ciudad/'

            config = {
                method: 'get',
                url: url + ciudad,

            };

        }else if(ambiente != undefined){

            url = 'http://localhost:5000/api/teatro/ambiente/'

            config = {
                method: 'get',
                url: url + ambiente,

            };

        }else if((nombre != undefined && nombre != "")){

            url = 'http://localhost:5000/api/teatro/nombre/'

            config = {
                method: 'get',
                url: url + nombre,

            };

        }else{

            url = 'http://localhost:5000/api/teatro/places/'

            config = {
                method: 'get',
                url: url ,

            };

        }


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
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                  <a>  Teatros</a>
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
                                      label ="Evento"
                                      rules={[{ required: false, message: 'Por favor ingresa una ciudad!' }]}
                                  >

                                      <Input
                                          style={{
                                              width: 150,
                                          }}


                                      />
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
                          <Link href="/login" title="Iniciar Sesi??n" />
                          <Link href="/signup" title="Registrate" />
                      </Anchor>
                  </Drawer>
              </div>
          </div>
      </div>
    );
}

export default AppHeaderTeatro;