import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker, Rate,
} from 'antd';
import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";


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

const AppReservaForm = () => {
    const [form] = Form.useForm();



    const onFinish=(values) =>{
        Reservar(values)
    }

    const Reservar = async(values) => {

        values.id_lugar = localStorage.getItem('establecimiento')

        values.fecha=moment(values.fecha).format('YYYY-MM-DD h:mm:ss')

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/reserva/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'post',
            url: url,
            headers: {
                'access-token': token,

            },
            data:values

        };

        const response = await Axios(config)

        const data = response.data


        const mensaje = response.data.message
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })


        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }



        return (
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Reservar</h2>
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
                                name="fecha"
                                label="Fecha "
                                tooltip="??Cu??l es la fecha en la que desea ir al establecimiento?"
                                rules={[{required: true, message: 'Por Favor ingresa La fecha!'}]}
                            >
                                <DatePicker/>
                            </Form.Item>

                            <Form.Item
                                name="notas"
                                label="Notas "
                                tooltip="Tienes algun comentario o peticion especial para el establecimiento?"
                                rules={[{required: false}]}
                            >
                                <TextArea/>
                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Reservar
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        );

};

export default AppReservaForm