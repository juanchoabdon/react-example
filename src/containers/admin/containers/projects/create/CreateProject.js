import React, { Component } from 'react';
import firebaseUtil from 'utils/firebase';
import Header from 'containers/admin/components/Header';
import project from 'api/project';

class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            loading: false
        }
        this.createProject = this.createProject.bind(this);
    }

    async createProject(e) {
        e.preventDefault();
        this.setState( { loading: true })
        const { data } = await project.add(this.state);
        
        this.setState({ loading: false });
        const { history } = this.props;    
        firebaseUtil.sendPmAutoMessage(data)
        history.push(`/admin/projects/${data.project_id}`);

    }


    render() {
        return (
            <div>
                <Header title="Crea un nuevo proyecto" subtitle="Tu mejor idea desarrollada por los mejores"/>
                <section className="section bg-grey" id="section-apply">

                    <div className="container">    
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">

                                <form onSubmit={this.createProject}>

                                    <div className="form-group">
                                        <input className="form-control" type="text" autoFocus="true" placeholder="Título"
                                        onChange={(e) => {
                                            this.setState({ title: e.target.value })
                                        }} required/>
                                    </div>

                                    {/* <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Descripción"
                                        onChange={(e) => {
                                            this.setState({ subtitle: e.target.value })
                                        }} required/>
                                    </div> */}

                                    <div className="form-group">
                                        <textarea className="form-control"  placeholder="Breve descripción de lo que quieres desarrollar" rows="9"
                                        onChange={(e) => {
                                            this.setState({ description: e.target.value })
                                        }} required></textarea>
                                    </div>

                                    {/* <div className="form-group">
                                        <input className="form-control" type="number" placeholder="Presupuesto"
                                        onChange={(e) => {
                                            this.setState({ budget: e.target.value })
                                        }} required/>
                                    </div> */}

                                    <button className={"btn btn-success btn-outline btn-block " + (this.state.loading  ? 'disabled' : '')} type="submit">Crear</button>
                                </form>

                            </div>
                        </div>


                    </div>
                </section>
            </div>
        )
    }
}

export default CreateProject;
