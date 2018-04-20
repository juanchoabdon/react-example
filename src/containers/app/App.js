import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';

import Account from './containers/account/Account';
import Groups from './containers/groups/Groups';
import People from './containers/people/People';
import Messaging from './containers/messaging/Messaging';

import Nav from './components/Nav';

const App = ({ match }) => (
    <div className="App">
        <Nav match={match}/>
        <Switch>
            <Route path={`${match.path}/people`} component={People} />
            <Route path={`${match.path}/groups`} component={Groups} />
            <Route path={`${match.path}/messaging`} component={Messaging}/>
            <Route path={`${match.path}/account`} component={Account} />
            <Redirect path={`${match.path}/`} exact to={`${match.path}/account`}  />
        </Switch>
    </div>
)

export default App;
