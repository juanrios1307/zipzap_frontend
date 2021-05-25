import React,{Component} from "react";
import '../assets/css/Plan.css';
import '../assets/css/App.css';
import AppHeader from "../components/header";

import AppFooter from "../components/main/footer";

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppLugar from "../components/lugar/plantillaLugar";

const { Header, Content } = Layout;


class LugarPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                   <AppLugar/>
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default LugarPage;