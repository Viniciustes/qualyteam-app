import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Coleta from './coleta';
import CreateColeta from './coleta/create';
import IndicadorMensal from './indicadorMensal';
import CreateIndicadorMensal from './indicadorMensal/create';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/coleta" exact component={Coleta} />
                <Route path="/coleta/create" component={CreateColeta} />
                <Route path="/indicadorMensal" exact component={IndicadorMensal} />
                <Route path="/indicadorMensal/create" component={CreateIndicadorMensal} />
            </Switch>
        </BrowserRouter>
    );
}