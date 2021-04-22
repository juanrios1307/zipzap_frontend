import React, { useState } from 'react';
import {
    Form,
    Input,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker, InputNumber, Rate,
} from 'antd';
import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import moment from "moment";


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

const AppRegistrationHotel = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);

    const onFinish=(values) =>{
        Register(values)
    }

    const Register = async(values) => {


        values.fecha_nac=moment(values.fecha_nac).format('YYYY-MM-DD h:mm:ss')

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/users/'

        const response = await Axios.post(
            url,
            {values})

        const mensaje = response.data.message
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            //localStorage.setItem("token",response.data.token)
            setBool(true)
            window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }

    if(bool){
        return(
            <Redirect to="/login"/>
        )
    }else {


        return (
            <div id="hero" className="registerBarBlock">
                <div className="container-fluid">

                    <div className="block">

                            <Form.Item
                                name="estrellas"
                                label="Estrellas "
                                rules={[{required: true, message: 'Por Favor ingresa la capacidad del evento!'}]}
                            >
                                <Rate />
                            </Form.Item>

                            <Form.Item
                                name="tipoHabs"
                                label="Cuantos Tipos De habitaciones tienes? "
                                rules={[{required: true, message: '¿cuántos tipos de habitaciones hay en el hotel? !'}]}
                            >
                                <InputNumber/>
                            </Form.Item>

                    </div>
                </div>
            </div>
        );
    }
};

export default AppRegistrationHotel