import React from "react";
import '../assets/css/App.css';
import AppLogin from "../components/login/login";
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