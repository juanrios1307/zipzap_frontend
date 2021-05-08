import React, { useState,useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    AutoComplete,
    Button,
    Upload,
    Modal,
    InputNumber, Rate, Row
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Axios from "axios";
import Swal from "sweetalert2";
import {Redirect} from "react-router-dom";
import moment from "moment";


const { Option } = Select;

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

const EditarImagenesEstablecimiento = () => {
    const [form] = Form.useForm();


    const [id, setId] = useState('');
    const [bool, setBool] = useState('');



    const[ previewVisible,setPreviewVisible]=useState(false)
    const [previewImage,setPreviewImage]=useState( '')
    const [previewTitle,setPreviewTitle]=useState('')
    const [fileList,setFileList]=useState([])

    const [imagesUrl,setImagesUrl]=useState([])


    const onFinish=(values) =>{
        Editar(values)
    }


    const getData = async() =>{

        var id =(localStorage.getItem('edit_id'))
        setId(id)

        var urlimg = 'http://localhost:5000/api/imagen/place/'
        var datArray=[]



        var configImg = {
            method: 'get',
            url: urlimg+id,
            };

        var images = await Axios(configImg)
        var dataImg = images.data

        for(var i=0 ; i<dataImg.length ; i++){

            datArray.push(
                {
                    'uid':i+1,
                    'name':'image-'+(i+1),
                    'status':'done',
                    'url':dataImg[i].imagen
                }
            )

        }

        setFileList(datArray)

    }


    useEffect(()=>{
        getData()
    },[])


    //Registro lugar, imagenes y especifico
    const Editar = async(values) => {

        const token = localStorage.getItem("token")

        await uploadImagenesLugar()
        values.imagenes = imagesUrl

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/
        const url='http://localhost:5000/api/imagen/edit/'

        const config = {
            method: 'post',
            url: url +id,
            headers: {
                'access-token': token
            },
            data: values

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
            //window.location.reload(false)
        }else{
            Swal.fire({
                title: status,

            })

        }
    }

    //Acciones con upload
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
        console.log(fileList)
        setFileList(fileList)
    };
    const handleRemove = () =>{
        console.log("Files REMOVE")

    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    //SUbo Imagenes
    const uploadImagenesLugar =async () => {


        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/zipzap/image/upload';
        const UPLOAD_PRESET = 'yxoq41kh';

        const formImages = new FormData();

        for(var i=0;i<fileList.length ; i++){

            if(fileList[i].originFileObj == undefined){
                imagesUrl.push(fileList[i].url)
            }else {

                formImages.append('file', fileList[i].originFileObj);
                formImages.append('upload_preset', UPLOAD_PRESET);

                const resI = await Axios.post(CLOUDINARY_URL, formImages);

                imagesUrl.push(resI.data.secure_url)
            }
        }


    };


    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    if(bool){
        return(
            <Redirect to="/dashboard"/>
        )
    }else if(localStorage.getItem("token")){
        return (
            <div id="hero" className="registerBlock registerPlaceBlock all">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Editar Imagenes Establecimiento</h2>
                    </div>

                    <div className="block">
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}

                            scrollToFirstError
                        >

                            <Form.Item
                                name="imagenes"
                                label="Imagenes"
                            >
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    onRemove={handleRemove}
                                    customRequest={dummyRequest}
                                    accept="image/png, image/jpeg"
                                >
                                    {fileList.length >= 10 ? null : uploadButton}
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


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Editar Imagenes
                                </Button>
                            </Form.Item>


                        </Form>

                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div id="hero" className="registerBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Por Favor Inicia Sesion </h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default EditarImagenesEstablecimiento