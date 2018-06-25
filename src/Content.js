import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Content = () => (
    <Switch>
        {routes.map((route, index) => (
            <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ))}
    </Switch>
);

export default Content;