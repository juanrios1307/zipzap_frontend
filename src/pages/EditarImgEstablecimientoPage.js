import React,{Component} from "react";
import '../assets/css/Register.css';
import '../assets/css/App.css';
import AppHeader from "../components/header";

import AppFooter from "../components/main/footer";

import {  Layout  } from 'antd';
import EditarImagenesEstablecimiento from "../components/ManejoEstablecimientos/editarImagenesEstablecimiento";

const { Header, Content, Footer } = Layout;

class EditarImgEstablecimientoPage extends Component {

    render() {

        return (

            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <EditarImagenesEstablecimiento />
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default EditarImgEstablecimientoPage