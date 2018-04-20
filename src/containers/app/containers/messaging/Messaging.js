import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ListMessages from './list/ListMessages';
import Header from 'containers/app/components/Header';
const Messaging = ({ match }) => {
    return(
        <div>
            <Header title="Messaging"/>
            <Switch>
                <Route path={`${match.path}`} exact component={ListMessages} />
            </Switch>
        </div>
    )
}

export default Messaging;
 

