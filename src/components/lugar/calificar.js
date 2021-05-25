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

const AppRatingForm = () => {
    const [form] = Form.useForm();


    const onFinish=(values) =>{
        Calificar(values)
    }

    const Calificar = async(values) => {


        values.id_lugar = localStorage.getItem('establecimiento')

        values.fecha=moment(values.fecha).format('YYYY-MM-DD h:mm:ss')

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/calificacion/'

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

            window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }



        return (
            <div id="hero" className="">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Calificar</h2>
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
                                name="calificacion"
                                label="Calificación "
                                rules={[{required: true, message: 'Por Favor Ingresa Tu Calificación'}]}
                            >
                                <Rate />
                            </Form.Item>

                            <Form.Item
                                name="comentario"
                                label="Comentario "
                                rules={[{required: true, message: 'Por Favor ingresa un comentario!'}]}
                            >
                                <TextArea/>
                            </Form.Item>

                            <Form.Item
                                name="fecha"
                                label="Fecha "
                                tooltip="¿Cuál fue la fecha en la que estuvo en el establecimiento?"
                                rules={[{required: true, message: 'Por Favor ingresa La fecha!'}]}
                            >
                                <DatePicker/>
                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Calificar
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        );

};

export default AppRatingForm