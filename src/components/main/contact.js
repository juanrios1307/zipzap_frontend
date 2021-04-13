import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Contáctanos</h2>
                    <p>Dolore nam rerum obcaecati fugit odio nobis Moletiae rerum</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Por favor ingresa tu nombre completo!' }]}
                    >
                        <Input placeholder="Nombre completo" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Correo electrónico"
                        />
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                        rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono!' }]}
                    >
                        <Input type="telephone" placeholder="Teléfono" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        rules={[{ required: true, message: 'Por favor ingresa el asunto de tu mensaje!' }]}
                    >
                        <Input placeholder="Asunto" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Por favor ingresa tu mensaje!' }]}
                    >
                        <TextArea placeholder="Mensaje" />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los términos y condiciones')),
                            },
                        ]}
                    >
                        <Checkbox>
                            He leído y acepto los términos y condiciones
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Enviar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AppContact;