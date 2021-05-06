import React,{Component} from "react";
import '../assets/css/Register.css';
import '../assets/css/App.css';
import AppHeader from "../components/header";

import EditarEstablecimiento from "../components/ManejoEstablecimientos/editarEstablecimiento";

import AppFooter from "../components/main/footer";

import {  Layout  } from 'antd';

const { Header, Content, Footer } = Layout;

class EditarEstablecimientoPage extends Component {

    render() {

        return (

            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <EditarEstablecimiento />
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default EditarEstablecimientoPage