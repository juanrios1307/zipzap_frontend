import React,{Component} from "react";
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppHeader from "../components/header";
import AppFooter from "../components/main/footer";
import AppMisReservas from "../components/ManejoEstablecimientos/MisReservas";

const { Header, Content } = Layout;

class MisReservasPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppMisReservas/>

                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default MisReservasPage;
