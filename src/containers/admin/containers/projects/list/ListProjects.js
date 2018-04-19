import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from 'containers/admin/components/Header';
import project from 'api/project';

class ListProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
        this.fetchProjects = this.fetchProjects.bind(this);
    }
    componentWillMount() {
        this.fetchProjects();
    }

    async fetchProjects() {
        const response =  await project.getAll();
        if (response.success) {
            if ( response.data.length < 1 ) {
                const { history } = this.props;    
                history.push('projects/add')
                return;
            }
            this.setState({ projects: response.data })
        }
    }


    render() {
        const { match } = this.props;
        return (
            <div>
                <Header title="Tus Proyectos" subtitle="loeefdg iej"/>
                <section className="section bg-grey">
                        <div className="container">
                
                            <div className="row gap-y">
                                
                                <div className="col-12 col-md-6 col-xl-6">
                                    <Link className="shop-item create card-shadowed card-hover-shadow" to={`${match.path}/create`}>
                                        <div className="text-center action">
                                            <h4> + Crear nuevo proyecto </h4>
                                        </div>
                                    </Link>
                                </div>
                        
                                {   this.state.projects.map((project, index) => ( 
                                            <div key={index} className="col-12 col-md-6 col-xl-6 animated fadeIn">
                                                <Link className="shop-item card-shadowed card-hover-shadow" to={`${match.path}/${project.id}`}>
                                                    <div className="text-center">
                                                        <h4>{project.title}</h4>
                                                    </div>
                                                </Link>
                                            </div>
                                        ) 
                                    )
                                }
                        
                    
                            </div>
                
                        </div>
                </section>
          </div>
        )
    }
}

export default ListProjects;
