import React,{Component} from "react";
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppHeader from "../components/header";
import AppPaquetes from "../components/busqueda/paquetes";
import Establecimientos from "../components/busqueda/establecimientos";

const { Header, Content } = Layout;

class BusquedaPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppPaquetes/>


                </Content>
                <Footer>
                    <Establecimientos/>
                </Footer>
            </Layout>
        );
    }
}
export default BusquedaPage;
