import React from 'react';
import MainPage from "./components/mainPage";
import {furniture, mainPage} from "./components/utils/constans";
import {Route, Switch} from "react-router-dom";

const ChangePage = () => {

    return (
        <Switch>
            <Route exact path={['/', `/${mainPage}`]} render={({match}) =>
                <MainPage page={match.params.page}/>}/>
            <Route exact path={`/${furniture}`} render={() =>
                <div>sdfsdfsf</div>}/>
            <Route>
                <h1>Error</h1>
            </Route>
        </Switch>
    );
};

export default ChangePage;