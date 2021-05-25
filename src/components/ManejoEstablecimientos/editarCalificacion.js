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

const AppEditarCalificacionForm = () => {
    const [form] = Form.useForm();


    const [id_rating, setId_rating]=useState('');
    const [id_lugar, setId_lugar]=useState('');

    const [fecha, setFecha]=useState('');
    const [comentarios, setComentarios]=useState('');
    const [calificacion, setCalificacion]=useState(0);

    const [bool, setBool]=useState(false);

    const onFinish=(values) =>{
        editarRating(values)
    }

    const getRating = async() =>{

        setId_rating(localStorage.getItem("id_rating"))
        const id=localStorage.getItem("id_rating")

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/calificacion/'

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
        setCalificacion(data[0].calificacion)
        setComentarios(data[0].comentario)

    }

    useEffect(()=>{
        getRating()

    },[])



    const editarRating = async(values) => {

        values.id_lugar = id_lugar

        if(values.fecha == undefined){
            values.fecha = moment(fecha).format('YYYY-MM-DD h:mm:ss')
        }else{
            values.fecha=moment(values.fecha).format('YYYY-MM-DD h:mm:ss')
        }

        if(values.comentario == undefined){
            values.comentario=comentarios
        }

        if(values.calificacion == undefined){
            values.calificacion = calificacion
        }

        console.log(values)

       //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/calificacion/'

        const token = localStorage.getItem("token")

        const config = {
            method: 'put',
            url: url+id_rating,
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
            <Redirect to="/misratings"/>
        )
    }else {

        return (
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Editar Calificación</h2>
                    </div>

                    <div className="block">
                        {comentarios && (
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
                                    name="calificacion"
                                    label="Calificación "
                                    rules={[{required: false}]}
                                >
                                    <Rate defaultValue={calificacion}/>
                                </Form.Item>

                                <Form.Item

                                    name="comentario"
                                    label="Comentario "
                                    rules={[{required: false}]}

                                >
                                    <TextArea
                                        placeholder={comentarios}/>
                                </Form.Item>


                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Editar Calificación
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

export default AppEditarCalificacionForm