import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './routeGuard';

export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} exact render={(props) => (
        isAuthenticated() === true ?
            <Component {...props} /> :
            <Redirect to='/login' />
    )} />

)

