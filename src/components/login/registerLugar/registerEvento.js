import React  from 'react';
import {
    Form,
    Input,
   InputNumber,
} from 'antd';


const AppRegistrationEvento = () => {

        return (
            <div id="hero" className="registerBarBlock">
                <div className="container-fluid">

                    <div className="block">

                            <Form.Item
                                name="descripcion"
                                label="Descripción Evento "
                                rules={[{required: true, message: 'Por favor Ingresa Una Descripción Del Evento', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="capacidad"
                                label="Capacidad "
                                rules={[{required: true, message: 'Por Favor ingresa la capacidad del evento!'}]}
                            >
                                <InputNumber/>
                            </Form.Item>


                    </div>
                </div>
            </div>
        );

};

export default AppRegistrationEvento