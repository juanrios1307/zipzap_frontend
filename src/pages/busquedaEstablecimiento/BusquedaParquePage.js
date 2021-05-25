import React,{Component} from "react";
import 'antd/dist/antd.css';
import '../../assets/css/App.css';
import '../../assets/css/Busqueda.css';

import Establecimientos from "../../components/busqueda/establecimientos"
import AppHeader from "../../components/header";
import AppFooter from "../../components/main/footer";

import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";

import Busqueda from "../../components/busqueda/busquedaParque";
import AppHeaderParque from "../../components/busqueda/headersBusqueda/headerParque";
import AppHeaderBar from "../../components/busqueda/headersBusqueda/headerBar";
const { Header, Content } = Layout;


class BusquedaPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: ''
        };
        this.filter = this.filter.bind(this);
    }

    filter(config){


        this.setState({
            config: config
        })
    }


    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                    <AppHeaderParque filter={this.filter} />
                </Header>
                <Content>
                    <Busqueda config={this.state.config}/>


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
