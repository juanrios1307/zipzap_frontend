import React,{Component} from "react";
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppHeader from "../components/header";
import AppFooter from "../components/main/footer";
import AppEditarCalificacion from "../components/ManejoEstablecimientos/editarCalificacion";

const { Header, Content } = Layout;

class EditarCalificacionPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppEditarCalificacion/>

                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default EditarCalificacionPage;
