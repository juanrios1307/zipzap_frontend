import React, { useState } from 'react';
import {
    Form,
    Input,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker, InputNumber,
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

const AppRegistrationMonumento = () => {
    const [form] = Form.useForm();

    const [bool,setBool] = useState(false);

        return (
            <div id="hero" className="registerBarBlock">
                <div className="container-fluid">

                    <div className="block">
                        <Form
                            {...formItemLayout}
                            form={form}

                            scrollToFirstError
                        >

                            <Form.Item
                                name="descripcion"
                                label="Descripción"
                                rules={[{required: true, message: 'Por favor Ingresa Una Descripción Del Monumento', whitespace: true}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                name="historia"
                                label="Historia"
                                rules={[{required: true, message: 'Por Favor ingresa la historia del monumento!'}]}
                            >
                                <Input/>
                            </Form.Item>

                        </Form>

                    </div>
                </div>
            </div>
        );

};

export default AppRegistrationMonumento