import React from 'react';
import store from 'store';
import Async from 'react-promise'
import { Route, Switch, Redirect} from 'react-router-dom';
import project from 'api/project';
import ListProjects from './list/ListProjects';
import CreateProject from './create/CreateProject';
import ViewProject from './view/ViewProject';

const Projects = ({ match }) => {
    return(
            <Switch>
                <Route path={`${match.path}`} exact component={ListProjects} />
                <Route path={`${match.path}/create`} component={CreateProject} />
                <Route path={`${match.path}/:projectId`} component={ViewProject} />
            </Switch>
    )
}

export default Projects;
 

