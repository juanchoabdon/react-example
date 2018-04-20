
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import customer from 'api/customer';
import project from 'api/project';


class Signup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            first_name: "",
            last_name: '',
            email: '',
            password: '',
            company: '',
            loading: false,
        }
        
        this.createCustomer = this.createCustomer.bind(this);
    }

    async createCustomer(e) {
        e.preventDefault();
        const { history } = this.props;        
        this.setState( { loading: true, error: '' } );
        const response = await customer.create(this.state);

        if (!response.success) {
            localStorage.removeItem('snovianToken');
            this.setState({
                    error: response.message_error,
                    loading: false
            });
            return;
        }

        localStorage.setItem('snovianToken', response.data.token);

        store.dispatch({
            type: 'SET_LOGGED_CUSTOMER',
            logged: response.success,
            customer: response.data
        })
        history.push(`/app`);
    }
        
    

    render() {
        return (
                <div className="SingupBox mh-fullscreen bg-img center-vh p-20"  style={{ 'backgroundImage': 'linear-gradient(to top, #5BABE0 0%, #5BABE0 1%, #439BE9 100%)' }}>
                    <div className="card card-shadowed p-50 w-600 mb-0 animated fadeIn" style={{maxWidth: '100%'}}>  
                        <h5 className="text-uppercase text-center">Signup</h5>
                        <br/><br/>
                        <div className="text-center error"> 
                            <p> {this.state.error} </p>
                        </div>
                        <form className="form-type-material" onSubmit={this.createCustomer}>
               
                                <div className="animated fadeIn">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"  
                                                autoFocus={this.state.register}  placeholder="Tu Nombre" required
                                                onChange={(e) => {
                                                    this.setState({ first_name: e.target.value })
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Apellido" required
                                                onChange={(e) => {
                                                    this.setState({ last_name: e.target.value })
                                                }}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" required
                                        onChange={(e) => {
                                            this.setState({ email: e.target.value })
                                        }}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña" required
                                        onChange={(e) => {
                                            this.setState({ password: e.target.value })
                                        }}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Empresa" required
                                        onChange={(e) => {
                                            this.setState({ company: e.target.value })
                                        }}/>
                                    </div>

                                    <br/>
                                    <button className={"btn btn-bold btn-block btn-success " + 
                                    (this.state.loading  ? 'disabled' : '')}  type="submit">
                                        Signup
                                    </button> 
                                </div>
                          
                        </form>

                        <hr className="w-30"/>

                    </div>
                </div>
            )
    }

}
    
    
export default Signup;
    
