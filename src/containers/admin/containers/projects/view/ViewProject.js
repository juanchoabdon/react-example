import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { resolve, client } from '@a-ignatov-parc/react-resolver';
import Loading from 'containers/loading/Loading';
import Header from './components/Header';
import Information from './information/Information';
import Milestones from './milestones/Milestones';
import Help from './help/Help'; 

import project from 'api/project';



class ViewProject extends Component {

    constructor(props) { 
        super(props);
 
        // this.state = {
        //     project: {}
        // }
    }

//    async componentWillMount() {
//         const { history } = this.props; 
//         const response  =  await project.get(this.props.match.params.projectId);

//         if (!response.success) {
//             history.push('/')
//             return;
//         }
//         this.setState( {
//             project: response.data
//         })
//     }


    
    render() {
        return (
            <div>
                <Header title={this.props.project.title} subtitle={this.props.project.subtitle} match={this.props.match}/>
                <section className="section bg-gray">
                    <Switch>
                        <Route path={`${this.props.match.url}`} exact render={props => {
                            return <Information project={this.props.project} />
                        }}/>
                        <Route path={`${this.props.match.url}/milestones`} render={ props => {
                            return <Milestones project={this.props.project} />
                        }} />
                        <Route path={`${this.props.match.url}/help`} component={Help} />
                    </Switch>
                </section>
            </div>
        )
    } 
}


const withLoader =  client(Loading);
const withResolver = resolve('project', async (props) => {

    const projectId = props.match.params.projectId;

    if (projectId === 'undefined' || !projectId ) {
        props.history.push('/');
        return;
    }
    const response  =  await project.get(projectId);
    
    if (!response.success) {
        props.history.push('/')
        return;
    }

   

    return response.data
});

export default withLoader(withResolver(ViewProject));