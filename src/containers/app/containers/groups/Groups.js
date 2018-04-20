import React from 'react';
import { Route, Switch} from 'react-router-dom';
import GroupsList from './list/GroupsList';
import Header from 'containers/app/components/Header';
const Groups = ({ match }) => {
    return(
        <div>
            <Header title="Groups"/>
            <Switch>
                <Route path={`${match.path}`} exact component={GroupsList} />
            </Switch>
        </div>
    )
}

export default Groups;
 

