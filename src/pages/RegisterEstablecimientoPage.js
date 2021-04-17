import React,{Component} from "react";
import '../assets/css/Register.css';
import '../assets/css/App.css';
import AppHeader from "../components/header";

import RegisterEstablecimiento from "../components/login/registerEstablecimiento";

import AppFooter from "../components/main/footer";

import {  Layout  } from 'antd';

const { Header, Content, Footer } = Layout;

class RegisterEstablecimientoPage extends Component {

    render() {

        return (

            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <RegisterEstablecimiento />
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default RegisterEstablecimientoPage