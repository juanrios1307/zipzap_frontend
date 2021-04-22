import React, { useState } from 'react';
import {
    Form,
    Input,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker, Upload, Modal,
} from 'antd';
import Axios from "axios";

import { PlusOutlined } from '@ant-design/icons';

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

const AppRegistrationRestaurante = () => {
    const [form] = Form.useForm();


    const[ previewVisible,setPreviewVisible]=useState(false)
    const [previewImage,setPreviewImage]=useState( '')
    const [previewTitle,setPreviewTitle]=useState('')
    const [cartaImg,setCartaImg]=useState([])

    const [cartaImgUrl,setCartaImgUrl]=useState([])

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    const handleCancel = () => setPreviewVisible( false );

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage( file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))

    };

    const handleChange = ({fileList}) => setCartaImg(fileList);

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const handleUpload =async () => {


        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/zipzap/image/upload';
        const UPLOAD_PRESET = 'yxoq41kh';


        console.log(cartaImg[0].originFileObj)

        const formImages = new FormData();

        for(var i=0;i<cartaImg.length ; i++){


            formImages.append('file', cartaImg[i].originFileObj);
            formImages.append('upload_preset', UPLOAD_PRESET);

            const resI = await Axios.post(CLOUDINARY_URL, formImages);

            cartaImgUrl.push(resI.data.secure_url)
        }

        console.log(formImages)

    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

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
                            label="Imagen Carta"
                            name="imagencarta">
                            <Form.Item
                                valuePropName="fileList"
                                noStyle>

                                <Upload
                                    listType="picture-card"
                                    fileList={cartaImg}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    customRequest={dummyRequest}
                                    accept="image/png, image/jpeg"
                                >
                                    {cartaImg.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal
                                    visible={previewVisible}
                                    title={previewTitle}
                                    footer={null}
                                    onCancel={handleCancel}
                                >
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </Form.Item>
                        </Form.Item>

                    </Form>

                </div>
            </div>
        </div>
    );

};
export default AppRegistrationRestaurante