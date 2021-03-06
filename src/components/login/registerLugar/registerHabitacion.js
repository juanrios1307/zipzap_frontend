import React  from 'react';
import {
    Form, Input, InputNumber,
} from 'antd';



const AppRegistrationHabitacion = (props) => {

    const {num} =props

    return (
            <div id="hero" className="registerBarBlock">
                <div className="container-fluid">


                        {Array.from({length:num},(v,i)=>i).map(item=>{
                            return(
                                <div className="block">
                                    <Form.Item
                                        name={"tipoH"+item}
                                        label="Tipo "
                                        tooltip="¿Que nombre tienen tus habitaciones?"
                                        rules={[{required: true, message: 'Por Favor ingresa el tipo de habitacion'}]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name={"valorHab"+item}
                                        label="Valor/ Noche "
                                        rules={[{required: true, message: '¿cuántos tipos de habitaciones hay en el hotel? !'}]}
                                    >
                                        <InputNumber />
                                    </Form.Item>

                                    <Form.Item
                                        name={"numeroHab"+item}
                                        label="Numero de habitaciones"
                                        tooltip="¿Cuantas Habitaciones tienes de este tipo?"
                                        rules={[{required: true, message: 'Que numero de Habitaciones tienes de este tipo !'}]}
                                    >
                                        <InputNumber min={1}/>
                                    </Form.Item>
                                </div>
                            )
                        })}



                </div>
            </div>
        );

};

export default AppRegistrationHabitacion