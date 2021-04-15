import React,{Component} from "react";
import '../assets/css/Plan.css';
import '../assets/css/App.css';
import AppHeader from "../components/header";

import PlanHotel from "../components/plan/planHotel";
import PlanRestaurante from "../components/plan/planRestaurante";
import PlanBar from "../components/plan/planBar";
import PlanMonumento from "../components/plan/planMonumento";
import PlanParque from "../components/plan/planParque";
import PlanTeatro from "../components/plan/planTeatro";
import AppFooter from "../components/main/footer";

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";
import AppHero from "../components/main/hero";

const { Header, Content } = Layout;


class PlanPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <PlanHotel/>
                    <PlanRestaurante/>
                    <PlanBar/>
                    <PlanMonumento/>
                    <PlanParque/>
                    <PlanTeatro/>
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}

export default PlanPage;