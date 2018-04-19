import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './containers/projects/Projects';
import Account from './containers/account/Account';

const Admin = ({ match }) => (
    <div className="Admin">
        <Nav match={match}/>
        <Switch>
            <Route path={`${match.path}/projects`} component={Projects} />
            <Route path={`${match.path}/account`} component={Account} />
            <Redirect path={`${match.path}/`} exact to={`${match.path}/projects`}  />
        </Switch>
    </div>
)

export default Admin;
