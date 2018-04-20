import React from 'react';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import Home from 'containers/home/Home';
import Login from 'containers/login/Login';
import Signup from 'containers/signup/Signup';
import NotFound from 'containers/not-found/NotFound';
import NotAuth from 'containers/not-auth/NotAuth'
import App from 'containers/app/App';
import AuthRoute from 'AuthRoute';

const MainRoutes = () =>  {    

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <AuthRoute path="/" exact component={Home} />
                    <AuthRoute path="/login" exact component={Login} />
                    <AuthRoute path="/signup" exact component={Signup} />
                     {/* We put auth="true" for this route to be restricted just people who are logged in */}
                    <AuthRoute auth="true" path="/app" component={App} />
                    <Route path="/404" component={NotFound} />      
                    <Route path="/403" component={NotAuth} />   
                    <Redirect path="*" to="/404" /> 
                </Switch>
            </BrowserRouter>
        </Provider>
    )
           
} 


export default MainRoutes;
 