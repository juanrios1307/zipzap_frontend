import React from "react";
import '../assets/css/App.css';
import AppLogin from "../components/login/login";
import HeaderLogin from "../components/login/headerLogin";

function LoginPage() {
    return (
        <div>
            <HeaderLogin/>
            <AppLogin/>
        </div>
    );
}

export default LoginPage;