import React,{Component} from 'react';
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import AppHeader from "../components/header";
import AppHero from "../components/main/hero";
import AppFooter from "../components/main/footer";

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";

const { Header, Content } = Layout;

class MainPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppHero/>

                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default MainPage;