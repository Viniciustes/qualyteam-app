import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Coleta from './coleta';
import IndicadorMensal from './indicadorMensal';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route isPrivate exact path="/" component={Home} />
            <Route isPrivate exact path="/coleta" component={Coleta} />
            <Route isPrivate exact path="/indicadorMensal" component={IndicadorMensal} />
        </Switch>
    );
}