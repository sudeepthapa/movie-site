import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from '../App';
import Description from "./Description"
const Router = () =>(
    <BrowserRouter>
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/description/:id" component={Description} />
        </Switch>
    </BrowserRouter>
)

export default Router;
