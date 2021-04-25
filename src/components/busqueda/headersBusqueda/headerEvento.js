import React, { useState,useEffect } from "react";

import {
    Anchor,
    Drawer,
    Button,
    Form,
    Input,
    AutoComplete,
    Cascader,
    Rate,
    Slider,
    Row,
    Col,
    InputNumber,
    Select,
    Switch
} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Axios from "axios";

const { Link } = Anchor;
const { Option } = Select;

function AppHeaderEvento() {

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


    const filtrar = async(values) => {

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        /* const url='http://localhost:5000/api/ambiente/'

         const response = await Axios.get(
             url,
         )

         const ciudades = response.data


         console.log(ciudades)*/

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
                  <i className="fa fa-fire" aria-hidden="true"></i>
                  <a>  Eventos</a>
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
                                      name="city"
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
                                      label="Capacidad">

                                      <Slider
                                          min={100}
                                          max={200}
                                          range
                                          defaultValue={[120, 180]}

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

                                  <Form.Item>
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

export default AppHeaderEvento;