import React,{Component} from 'react';
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import AppHeader from "../components/header";
import AppHero from "../components/main/hero";
import AppAbout from "../components/main/about";
import AppFeature from "../components/main/aFeature";
import AppWorks from "../components/main/works";
import AppPricing from "../components/main/princing";
import AppContact from "../components/main/contact";
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