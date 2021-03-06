import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
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

const AppRegistrationForm = () => {
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
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Registro</h2>
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
                                name="correo"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'El email ingresado no es valido',
                                    },
                                    {
                                        required: true,
                                        message: 'Por favor ingresa tu email!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Contrase??a"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresa tu contrase??a!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirmar Contrase??a"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor confirma tu contrase??a!',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="nombre"
                                label="Nombre "
                                rules={[{required: true, message: 'Por favor ingresa tu nombre!', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="apellido"
                                label="Apellido "

                                rules={[{required: true, message: 'Por favor ingresa tu  apellido!', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item name="fecha_nac"
                                       label="Fecha Nacimiento "
                                       rules={[{required: true}]}
                            >
                                <DatePicker/>
                            </Form.Item>


                            <Form.Item
                                name="telefono"
                                label="Celular "
                                rules={[{required: true, message: 'Por favor ingresa tu telefono!'}]}
                            >
                                <Input/>
                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>

                        <a href="/signup/place" className="a">Registra Tu Empresa</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default AppRegistrationForm