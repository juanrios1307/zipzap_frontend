import React,{Component} from "react";
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppHeader from "../components/header";
import AppPaquetes from "../components/busqueda/paquetes";
import Establecimientos from "../components/busqueda/establecimientos";
import AppMisEstablecimientos from "../components/MisEstablecimientos";
import AppFooter from "../components/main/footer";

const { Header, Content } = Layout;

class MisEstablecimientosPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppMisEstablecimientos/>

                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default MisEstablecimientosPage;
