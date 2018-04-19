import React from 'react';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import Home from 'containers/home/Home';
import Login from 'containers/login/Login';
import Signup from 'containers/signup/Signup';
import Invitation from 'containers/invitation/Invitation';
import NotFound from 'containers/not-found/NotFound';
import NotAuth from 'containers/not-auth/NotAuth'
import Admin from 'containers/admin/Admin';
import AppRoute from 'AppRoute';

const MainRoutes = () =>  {    

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <AppRoute path="/" exact component={Home} />
                    <AppRoute path="/login" exact component={Login} />
                    <AppRoute path="/signup" exact component={Signup} />
                    <AppRoute path="/invitation/:token" component={Invitation} />
                    <AppRoute auth="true" path="/admin" component={Admin} />
                    <Route path="/404" component={NotFound} />      
                    <Route path="/403" component={NotAuth} />   
                    <Redirect path="*" to="/404" /> 
                </Switch>
            </BrowserRouter>
        </Provider>
    )
           
} 


export default MainRoutes;
 