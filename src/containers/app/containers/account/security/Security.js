import React, { Component } from 'react';
import customer from 'api/customer';

class Security extends Component {

    constructor(props) {
        super(props);

        this.state = {
            old_password: '',
            password: '',
            error: '',
            loading: false
        }

        this.editPassword = this.editPassword.bind(this);
    }


    async editPassword(e) {
        e.preventDefault();
        this.setState( { loading: true, error: '' , success: false} );
        const response = await customer.editPassword(this.state);
        this.setState({ loading: false });
        if (!response.success) {
            this.setState({
                error: response.message_error
            })
            return;
        }
    
        this.setState({
            success: true
        })
    }

    render() {
        return  (

            <form onSubmit={this.editPassword}> 
                <div className="form-group">
                     <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="password" autoFocus="true" placeholder="Contraseña" value={this.state.old_password}
                            onChange={(e) => {
                                this.setState({ old_password: e.target.value })
                            }} required/>
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type="password" placeholder="Nueva contraseña" value={this.state.password}
                            onChange={(e) => {
                                this.setState({ password: e.target.value })
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

export default Security;