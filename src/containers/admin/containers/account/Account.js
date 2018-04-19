import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from 'containers/admin/components/Header';
import Nav from './components/Nav';

import Profile from './profile/Profile';
import Security from './security/Security';
import Team from './team/Team';
import Settings from './settings/Settings';

const Account = ({ match }) => { 
    return(
        <div>
            <Header title="Tu Cuenta"/>
            <section className="section bg-gray" id="section-vtab">
                <div className="container">
                    <div className="row gap-5">
                        <div className="col-12 col-md-4">
                            <Nav match={match}/>
                        </div>
                        <div className="col-12 col-md-8 align-self-center">
                            <Switch>
                                <Route path={`${match.path}`} exact component={Profile} />
                                <Route path={`${match.path}/security`} component={Security} />
                                <Route path={`${match.path}/team`} component={Team} />
                                <Route path={`${match.path}/settings`} component={Settings} />
                            </Switch>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Account;
