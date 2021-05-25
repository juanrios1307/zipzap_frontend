import React, { useState } from 'react';
import {
    Form, Upload, Modal,
} from 'antd';


import { PlusOutlined } from '@ant-design/icons';


const AppRegistrationRestaurante = (props) => {


    const[ previewVisible,setPreviewVisible]=useState(false)
    const [previewImage,setPreviewImage]=useState( '')
    const [previewTitle,setPreviewTitle]=useState('')
    const [cartaImg,setCartaImg]=useState([])


    const {handleMenu} = props


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

    const handleChange = ({fileList}) =>{
        setCartaImg(fileList);

        handleMenu(fileList)
    }

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
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

                </div>
            </div>
        </div>
    );

};
export default AppRegistrationRestaurante