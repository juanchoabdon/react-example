import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ListPeople from './list/ListPeople';
import Header from 'containers/app/components/Header';
const People = ({ match }) => {
    return(
        <div>
            <Header title="People"/>
            <Switch>
                <Route path={`${match.path}`} exact component={ListPeople} />
            </Switch>
        </div>
    )
}

export default People;
 

