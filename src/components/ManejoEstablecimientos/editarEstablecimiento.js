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

const EditarEstablecimiento = () => {
    const [form] = Form.useForm();


    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [ambientes, setAmbientes] = useState([]);
    const [tipos, setTipos] = useState(['bar','evento','hotel','monumento','parque','restaurante','teatro']);


    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [imagenes, setImagenes]=useState([])
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [longitud, setLongitud] = useState('');
    const [latitud, setLatitud] = useState('');
    const [paginaWeb, setPaginaWeb] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [ambiente, setAmbiente] = useState('');
    const [tipo, setTipo] = useState('');

    const [carta,setCarta] = useState('')
    const [cartaN,setCartaN] = useState('')

    const [descripcion,setDescripcion] = useState('')
    const [capacidad,setCapacidad] = useState(0)

    const [estrellas,setEstrellas] = useState(0)
    const [tiposhabs, settiposhabs]=useState([])
    const [valorHabs, setvalorHabs]=useState([])
    const [disponibilidadHabs, setdisponibilidadHabs]=useState([])
    const [bool, setBool] = useState('');

    const [historia,setHistoria] = useState('')

    const [menu,setMenu] = useState('')
    const [menuN,setMenuN] = useState('')


    const [cartelera,setCartelera] = useState('')
    const [carteleraN,setCarteleraN] = useState('')


    const [dataForm,setDataForm]=useState(false)


    const[ previewVisible,setPreviewVisible]=useState(false)
    const [previewImage,setPreviewImage]=useState( '')
    const [previewTitle,setPreviewTitle]=useState('')
    const [fileList,setFileList]=useState([])

    const [imagesUrl,setImagesUrl]=useState([])


    const onFinish=(values) =>{
        Editar(values)
    }

    //Selecciono getCiudades y getAmbientes
    const getCiudades = async() =>{

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ciudad/'

        const response = await Axios.get(
            url,
            )

        const data = response.data

        for(var i=0;i<data.length;i++){

            ciudades.push(
                new Object({
                    "key":data[i].id_ciudad,
                    "value":data[i].nombre
                })
            )
        }

    }

    const getAmbientes = async() =>{

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='http://localhost:5000/api/ambiente/'

        const response = await Axios.get(
            url,
        )

        const ambientes = response.data
        setAmbientes(ambientes)

    }



    const getData = async() =>{

        var tipo=(localStorage.getItem('tipo'))
        setTipo(tipo)

        var id =(localStorage.getItem('edit_id'))
        setId(id)



        if(tipo==="bar"){
            console.log("bar")
            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/bar/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)
                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)

                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setCarta(data[0].carta)
            }

        }
        else if(tipo === "evento"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/evento/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)

                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
                setCapacidad(data[0].capacidad)
            }
        }
        else if(tipo === "hotel"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/hotel/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)

                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setEstrellas(data[0].estrellas)


                //await getHabs(data[0].id_lugar)

            }

        }
        else if(tipo==="monumento"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/monumento/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)

                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
                setHistoria(data[0].historia)
            }
        }
        else if(tipo === "parque"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/parque/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)

                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setDescripcion(data[0].descripcion)
            }
        }
        else if(tipo === "restaurante"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/restaurante/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)

                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)


                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setMenu(data[0].menu)
            }
        }
        else if (tipo=== "teatro"){

            //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
            const url='http://localhost:5000/api/teatro/places/'

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

            if(data.length>0) {
                setNombre(data[0].nombre)
                setCorreo(data[0].correo)
                setTelefono(data[0].telefono)
                setLongitud(data[0].logitud)
                setLatitud(data[0].latitud)
                setPaginaWeb(data[0].paginaweb)
                setTipo(data[0].tipo)

                setCiudad(data[0].ciudad)
                setAmbiente(data[0].ambiente)

                for (var i = 0; i < data.length; i++) {
                    imagenes.push(data[i].imagen)
                }

                setCartelera(data[0].cartelera)
                setCapacidad(data[0].capacidad)
            }
        }
        setDataForm(true)
    }

    const getHabs = async (id_lugar)=> {
        var urlhabs = 'http://localhost:5000/api/habitacion/place/'

        var configHabs = {
            method: 'get',
            url: urlhabs + id_lugar,

        };

        var habs = await Axios(configHabs)
        var dataHabs = habs.data

        console.log(dataHabs)

        for (var i = 0; i < dataHabs.length; i++) {
            tiposhabs.push(dataHabs[i].tipo)
            valorHabs.push(dataHabs[i].valor)
            disponibilidadHabs.push(dataHabs[i].disponibilidad)
        }

        setBool(true)
    }

    useEffect(()=>{
        getAmbientes()
        getCiudades()
        getData()
    },[])


    //Registro lugar, imagenes y especifico
    const Editar = async(values) => {

        const token = localStorage.getItem("token")


        values.fecha_ultima_edicion=moment().format('YYYY-MM-DD h:mm:ss')
        values.logitud=longitud
        values.latitud=latitud

        if(values.nombre == undefined){
            values.nombre=nombre
        }

        if(values.correo == undefined){
            values.correo = correo
        }

        if(values.telefono == undefined){
            values.telefono=telefono
        }

        if(values.paginaweb == undefined){
            values.paginaweb = paginaWeb
        }

        if(values.ciudad == undefined){
            values.ciudad = ciudad
        }else{

            const cityKey = ciudades.find(function (item){
                return item.value == values.ciudad
            })

            if(cityKey != undefined){
                values.ciudad=cityKey.key
            }else{

            }
        }

        if(values.ambiente == undefined){
            values.ambiente=ambiente
        }

        if(values.tipo == undefined){
            values.tipo = tipo
        }


        console.log(values)

        //values.imagenes = imagesUrl

        if(tipo=== "bar"){

            if(fileList.length==0){
                values.carta=carta
            }else {
                values.carta = await uploadImagenEspecifica(fileList)
            }
        }

        if(tipo === "evento"){

            if(values.descripcion == undefined){
                values.descripcion =descripcion
            }

            if(values.capacidad == undefined){
                values.capacidad =capacidad
            }


        }

        if(tipo === "hotel"){

            if(values.estrellas == undefined){
                values.estrellas =estrellas
            }

        }

        if(tipo === "monumento"){

            if(values.descripcion == undefined){
                values.descripcion =descripcion
            }

            if(values.historia == undefined){
                values.historia =historia
            }

        }

        if(tipo === "parque"){

            if(values.descripcion == undefined){
                values.descripcion =descripcion
            }

        }

        if(tipo=== "restaurante"){

            if(fileList.length==0){
                values.menu = menu
                console.log("Menu undef")
            }else{
                values.menu =await  uploadImagenEspecifica(fileList)
                console.log("Syube menu")
            }


        }

        if(tipo=== "teatro"){

            if( fileList.length==0){
                values.cartelera = cartelera
            }else {
                values.cartelera = await uploadImagenEspecifica(fileList)
            }

            if(values.capacidad == undefined){
                values.capacidad =capacidad
            }
        }



        console.log(values)

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
      const url='http://localhost:5000/api/lugar/'

        const config = {
            method: 'put',
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

    const handleChange = ({fileList}) => setFileList(fileList);

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


            formImages.append('file', fileList[i].originFileObj);
            formImages.append('upload_preset', UPLOAD_PRESET);

            const resI = await Axios.post(CLOUDINARY_URL, formImages);

            imagesUrl.push(resI.data.secure_url)
        }


    };


    //Subo imagen
    const uploadImagenEspecifica =async (imagenes) => {

        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/zipzap/image/upload';
        const UPLOAD_PRESET = 'yxoq41kh';

        var imagenesURL =[]


        const formImages = new FormData();

        for(var i=0;i<imagenes.length ; i++){

            formImages.append('file', imagenes[i].originFileObj);
            formImages.append('upload_preset', UPLOAD_PRESET);

            const resI = await Axios.post(CLOUDINARY_URL, formImages);

            imagenesURL.push(resI.data.secure_url)
        }

        return imagenesURL

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
                        <h2>Editar Establecimiento</h2>
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
                                name="nombre"
                                label="Nombre "
                                rules={[{required: false, whitespace: true}]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="correo"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'El email ingresado no es valido',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="telefono"
                                label="Celular "
                                rules={[{required: false, message: 'Por favor ingresa el telefono!'}]}
                            >
                                <InputNumber />
                            </Form.Item>

                            <Form.Item
                                name="paginaweb"
                                label="Website"
                                rules={[{required: false}]}
                            >

                                <Input />

                            </Form.Item>

                            <Form.Item
                                name="ciudad"
                                label="ciudad"
                                rules={[{required: false, message: 'Por favor ingresa una ciudad!'}]}
                            >

                                <AutoComplete
                                    style={{
                                        width: 200,
                                    }}
                                    options={ciudades}
                                    filterOption={(inputValue, option) =>
                                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />


                            </Form.Item>


                            <Form.Item
                                name="ambiente"
                                label="Ambiente "
                                rules={[{required: false, message: 'Por Favor Elije un Ambiente!'}]}>
                                <Select>
                                    {ambientes.map(i =>(
                                        <Option key={i.id_ambiente}>{i.nombre}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="tipo"
                                label="Tipo "
                                rules={[{required: false, message: 'Por Favor Elije El tipo de tu Establecimiento!'}]}>
                                <Select onChange={e=>setTipo(e)}>
                                    {tipos.map(i =>(
                                        <Option key={i} value={i}>{i}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            {tipo==="bar" && (
                                <Form.Item
                                    name="carta"
                                    label="carta"
                                >
                                    <Upload
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                        customRequest={dummyRequest}
                                        accept="image/png, image/jpeg"
                                    >
                                        {fileList.length >= 1 ? null : uploadButton}
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
                               )}

                            {tipo==="evento" && (
                                <div className="block">

                                    <Form.Item
                                        name="descripcion"
                                        label="Descripción Evento "
                                        rules={[{required: false, message: 'Por favor Ingresa Una Descripción Del Evento', whitespace: true}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        name="capacidad"
                                        label="Capacidad "
                                        rules={[{required: false, message: 'Por Favor ingresa la capacidad del evento!'}]}
                                    >
                                        <InputNumber/>
                                    </Form.Item>


                                </div>
                                )}

                            {tipo === "hotel" && (
                                <div className="block">

                                    <Form.Item
                                        name="estrellas"
                                        label="Estrellas"
                                        rules={[{required: false}]}
                                    >
                                        <Rate/>
                                    </Form.Item>

                                    <p>Si deseas Editar tus habitaciones debes crear un nuevo establecimiento</p>
                                </div>
                            )}

                            {tipo==="monumento" && (
                                <div className="block">

                                    <Form.Item
                                        name="descripcion"
                                        label="Descripción"
                                        rules={[{required: false, message: 'Por favor Ingresa Una Descripción Del Monumento', whitespace: true}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        name="historia"
                                        label="Historia"
                                        rules={[{required: false, message: 'Por Favor ingresa la historia del monumento!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                </div>
                            )}
                            {tipo==="parque" && (
                                <div className="block">

                                    <Form.Item
                                        name="descripcion"
                                        label="Descripción"
                                        rules={[{required: false, message: 'Por favor Ingresa Una Descripción Del Parque', whitespace: true}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                </div>
                            )}

                            {tipo==="restaurante" && (

                                <Form.Item
                                    name="menu"
                                    label="menu"
                                >
                                    <Upload
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                        customRequest={dummyRequest}
                                        accept="image/png, image/jpeg"
                                    >
                                        {fileList.length >= 1 ? null : uploadButton}
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
                            )}

                            {tipo==="teatro" && (
                                <div className="block">

                                    <Form.Item
                                        label="Imagen Cartelera"
                                        name="cartelera">
                                        <Form.Item
                                            valuePropName="fileList"
                                            noStyle>

                                            <Upload
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={handlePreview}
                                                onChange={handleChange}
                                                customRequest={dummyRequest}
                                                accept="image/png, image/jpeg"
                                            >
                                                {fileList.length >= 1 ? null : uploadButton}
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

                                    <Form.Item
                                        name="capacidad"
                                        label="Capacidad "
                                        rules={[{required: false, message: 'Por Favor ingresa la capacidad del teatro!'}]}
                                    >
                                        <InputNumber/>
                                    </Form.Item>


                                </div>
                            )}

                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Editar
                                </Button>
                            </Form.Item>

                            <a href="/lugar/edit/images" className="a">Edita Tus Imagenes</a>

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

export default EditarEstablecimiento