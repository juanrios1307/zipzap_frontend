import React,{Component} from "react";
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppHeader from "../components/header";
import AppFooter from "../components/main/footer";
import AppLugarReservas from "../components/ManejoEstablecimientos/ReservasLugar";

const { Header, Content } = Layout;

class LugarReservasPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppLugarReservas/>

                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default LugarReservasPage;
