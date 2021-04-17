import React from "react";
import '../assets/css/App.css';
import AppLogin from "../components/login/login";
import HeaderLogin from "../components/login/headerLogin";
import {Header} from "antd/es/layout/layout";
import AppHeader from "../components/header";

function LoginPage() {
    return (
        <div>

            <AppHeader/>

            <AppLogin/>
        </div>
    );
}

export default LoginPage;