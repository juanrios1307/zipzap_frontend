import React, { useState } from 'react';
import {
    Form,
    InputNumber,
    Rate,
} from 'antd';
import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import moment from "moment";

import AppRegistrationHabitacion from "./registerHabitacion";

const AppRegistrationHotel = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);
    const [nTipos,setNTipos] = useState(1);

    const getArray = (n) =>{
        setNTipos(n)

        console.log()
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
                                <InputNumber onChange={e=>getArray(e)} min={1} max={5}/>
                            </Form.Item>

                             <AppRegistrationHabitacion num={nTipos} />
                    </div>
                </div>
            </div>
        );
    }
};

export default AppRegistrationHotel