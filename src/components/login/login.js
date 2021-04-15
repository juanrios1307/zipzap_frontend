import React, {useEffect, useState} from 'react';
import '../../assets/css/Login.css';
import Wave from '../../assets/images/wave.png';
import DashImg from '../../assets/images/planeLog.svg';
import Deliveries from '../../assets/images/travelLog.svg';
import { Link,Redirect } from 'react-router-dom';

import Axios from "axios";
import Swal from "sweetalert2";



function AppLogin() {

    const [email,setEmail] = useState('.');

    const [password, setPassword] = useState('');

   const Login = async(e) => {

       e.preventDefault()

        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/login'
        const url='http://localhost:5000/api/users/login/'

        const response = await Axios.post(
            url,
            {email,password})

        const mensaje = response.data.mensaje
        const status=response.status

       console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            localStorage.setItem("token",response.data.token)

            window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

            setPassword('')
            setEmail('')
        }
    }

    if(localStorage.getItem('token')){
        return(
            <Redirect to="/"/>
        )
    }else {

        return (

            <div className="body">

                <div className="container">
                    <div className="img">
                        <img src={Deliveries} alt="logistic.svg"/>
                    </div>
                    <div className="login-content">
                        <form className="form" onSubmit={Login}>
                            <img src={DashImg} alt="logo.svg"/>
                            <h2 className="title">Bienvenido</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="email" className="input" placeholder="Email"
                                           onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" className="input" placeholder="Contraseña"
                                           onChange={e => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <a href="/" className="a">¿Olvidaste tu contraseña?</a>

                            <a href="/" className="a">Registra Tu Empresa</a>
                            <input type="submit" className="btn" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppLogin;