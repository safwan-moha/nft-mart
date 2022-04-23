import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import PrivateRouteWithLayout from './layouts/PrivateRouteWithLayout';
import RouteWithLayout from './layouts/RouteWithLayout';

import SignIn from './SignIn';
import NotFoundView from './NotFound';

import {
    Home, CollectionInternal
} from '../business/views';

const AllRoute = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />

            <RouteWithLayout component={Home} path="/home" exact layout={MainLayout} />
            <PrivateRouteWithLayout component={CollectionInternal} path="/home/:id" exact layout={MainLayout} />
            
            <RouteWithLayout component={SignIn} path="/sign-in" exact layout={MinimalLayout} />
            <RouteWithLayout component={NotFoundView} path="/not-found" exact layout={MinimalLayout} />
            {/* <Redirect to="/not-found" /> */}
        </Switch>
    );
};

export default AllRoute;
