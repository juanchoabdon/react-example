import React, { Component } from 'react';
import store from 'store';
import customer from 'api/customer';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            first_name: '',
            last_name: '',
            company: '',
            email: '',
            skype: '',
            old_email: '',
            error: '',
            success: false
        }

        this.editCustomer = this.editCustomer.bind(this);
    }

    componentWillMount() {
        const { loggedCustomerState } = store.getState();
        this.setState({
            ...loggedCustomerState.customer,
            old_email: loggedCustomerState.customer.email
        })
    }


    async editCustomer(e) {
        e.preventDefault();
        this.setState( { loading: true, error: '' , success: false} );
        const response = await customer.edit(this.state);
        this.setState({ loading: false });
        if (!response.success) {
            this.setState({
                error: response.message_error
            })
            return;
        }
        
        store.dispatch({
            type: 'SET_LOGGED_CUSTOMER',
            logged: true,
            customer: this.state
        });
        this.setState({
            success: true
        })
    }


    render() {        
        return (
            <form onSubmit={this.editCustomer}> 

                <div className="form-group">
                     <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="text"  autoFocus="true"placeholder="Nombres" value={this.state.first_name}
                            onChange={(e) => {
                                this.setState({ first_name: e.target.value })
                            }} required/>
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Apellido" value={this.state.last_name}
                            onChange={(e) => {
                                this.setState({ last_name: e.target.value })
                            }} required/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Email" value={this.state.email}
                            onChange={(e) => {
                                this.setState({ email: e.target.value })
                            }} required/>
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Skype" value={this.state.skype}
                            onChange={(e) => {
                                this.setState({ skype: e.target.value })
                            }} />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Empresa" value={this.state.company}
                            onChange={(e) => {
                                this.setState({ company: e.target.value })
                            }} required/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    { this.state.success && <p className="success"> Editado Correctamente! </p> }
                    <p className="error">  {this.state.error} </p>
                </div>
                <button className={"btn btn-success btn-outline btn-block " + (this.state.loading  ? 'disabled' : '')} type="submit">Editar</button>

            </form>
        )
    }

}

export default Profile;