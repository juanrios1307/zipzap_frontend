import React,{Component} from "react";
import 'antd/dist/antd.css';
import '../../assets/css/App.css';
import '../../assets/css/Busqueda.css';

import Establecimientos from "../../components/busqueda/establecimientos"
import AppHeader from "../../components/header";
import AppFooter from "../../components/main/footer";

import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";

import Busqueda from "../../components/busqueda/busquedaMonumento";
const { Header, Content } = Layout;


class BusquedaPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <Busqueda/>


                </Content>
                <Footer>
                    <Establecimientos/>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default BusquedaPage;
