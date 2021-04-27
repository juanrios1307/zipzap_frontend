import React, { useState } from 'react';
import {
    Form,
    Input,
} from 'antd';





const AppRegistrationParque = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);

    return (
        <div id="hero" className="registerBarBlock">
            <div className="container-fluid">

                <div className="block">

                        <Form.Item
                            name="descripcion"
                            label="Descripción"
                            rules={[{required: true, message: 'Por favor Ingresa Una Descripción Del Parque', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                </div>
            </div>
        </div>
    );

};

export default AppRegistrationParque