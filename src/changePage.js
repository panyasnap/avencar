import React from 'react';
import MainPage from "./components/mainPage";
import {aboutUs, design, furniture, mainPage} from "./components/utils/constans";
import {Route, Switch} from "react-router-dom";
import Furniture from "./components/furniture/Furniture";
import AboutUs from "./components/aboutUs/AboutUs";
import Design from "./components/design/design";

const ChangePage = () => {

    return (
        <Switch>
            <Route exact path={['/', `/${mainPage}`]} render={({match}) =>
                <MainPage page={match.params.page}/>}/>
            <Route exact path={`/${furniture}`} render={() =>
                <Furniture/>}/>
            <Route exact path={`/${aboutUs}`} render={() => <AboutUs/> }/>
            <Route exact path={`/${design}`} render={() => <Design/> }/>
            <Route>
                <h1>Error</h1>
            </Route>
        </Switch>
    );
};

export default ChangePage;