import React from "react";
import MainPage from "./pages/MainPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import BusquedaCiudadPage from "./pages/BusquedaCiudad";
import PlanPage from "./pages/PlanPage";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import BusquedaHotelPage from "./pages/busquedaEstablecimiento/BusquedaHotelPage"
import BusquedaBarPage from "./pages/busquedaEstablecimiento/BusquedaBarPage";
import BusquedaMonumentoPage from "./pages/busquedaEstablecimiento/BusquedaMonumentoPage";
import BusquedaParquePage from "./pages/busquedaEstablecimiento/BusquedaParquePage";
import BusquedaRestaurantePage from "./pages/busquedaEstablecimiento/BusquedaRestaurantePage";
import BusquedaTeatroPage from "./pages/busquedaEstablecimiento/BusquedaTeatroPage";
import RegisterEstablecimientoPage from "./pages/RegisterEstablecimientoPage";


import AppMap from "./components/login/Map";
import MisEstablecimientosPage from "./pages/MisEstablecimientosPage";



class App extends React.Component {
    render() {
        return(

            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/signup" component={RegisterPage}/>
                    <Route exact path="/signup/place" component={RegisterEstablecimientoPage}/>

                    <Route exact path="/dashboard" component={MisEstablecimientosPage}/>

                    <Route exact path="/map" component={AppMap}/>

                    <Route exact path="/busqueda" component={BusquedaCiudadPage}/>
                    <Route exact path="/plan" component={PlanPage}/>

                    <Route exact path="/busqueda/bar" component={BusquedaBarPage}/>
                    <Route exact path="/busqueda/hotel" component={BusquedaHotelPage}/>
                    <Route exact path="/busqueda/monumento" component={BusquedaMonumentoPage}/>
                    <Route exact path="/busqueda/parque" component={BusquedaParquePage}/>
                    <Route exact path="/busqueda/restaurante" component={BusquedaRestaurantePage}/>
                    <Route exact path="/busqueda/teatro" component={BusquedaTeatroPage}/>

                </Switch>
            </Router>

        )
    }
}

export default App;