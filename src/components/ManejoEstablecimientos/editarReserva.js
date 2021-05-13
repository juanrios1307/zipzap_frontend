import React, { useState,useEffect } from 'react';
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

const AppEditarReservaForm = () => {
    const [form] = Form.useForm();


    const [id_reserva, setId_reserva]=useState('');
    const [id_lugar, setId_lugar]=useState('');

    const [fecha, setFecha]=useState('');
    const [notas, setNotas]=useState('');

    const [bool, setBool]=useState(false);

    const onFinish=(values) =>{
        editarReserva(values)
    }

    const getReserva = async() =>{

        setId_reserva(localStorage.getItem("reserva_id_reserva"))
        const id=localStorage.getItem("reserva_id_reserva")

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/reserva/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'get',
            url: url+id,
            headers: {
                'access-token': token
            }
        };

        const response = await Axios(config)

        const data = response.data

        console.log(data)

        setId_lugar(data[0].id_lugar)
        setFecha(data[0].fecha)
        setNotas(data[0].notas)

    }

    useEffect(()=>{
        getReserva()

    },[])



    const editarReserva = async(values) => {

        values.id_lugar = id_lugar


        if(values.fecha == undefined){
            values.fecha = moment(fecha).format('YYYY-MM-DD h:mm:ss')
        }else{
            values.fecha=moment(values.fecha).format('YYYY-MM-DD h:mm:ss')
        }


        if(values.notas == undefined){
            values.notas=notas
        }

        console.log(values)

       //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/reserva/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'put',
            url: url+id_reserva,
            headers: {
                'access-token': token,

            },
            data:values

        };

        const response = await Axios(config)


        const mensaje = response.data.message
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            setBool(true)
        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }

    if(bool){
        return(
            <Redirect to="/misreservas"/>
        )
    }else {

        return (
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Editar Reserva</h2>
                    </div>

                    <div className="block">
                        {notas && (
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
                                    tooltip="¿Cuál es la fecha en la que desea ir al establecimiento?"
                                    rules={[{required: false, message: 'Por Favor ingresa La fecha!'}]}

                                >
                                    <DatePicker
                                        defaultValue={moment(fecha, 'YYYY/MM/DD')}/>
                                </Form.Item>

                                <Form.Item

                                    name="notas"
                                    label="Notas "
                                    tooltip="Tienes algun comentario o peticion especial para el establecimiento?"
                                    rules={[{required: false}]}

                                >
                                    <TextArea
                                        placeholder={notas}/>
                                </Form.Item>


                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Editar Reserva
                                    </Button>
                                </Form.Item>
                            </Form>

                        )}

                    </div>
                </div>
            </div>
        );
    }
};

export default AppEditarReservaForm