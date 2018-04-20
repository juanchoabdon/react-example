
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import customer from 'api/customer';
import './Login.css';

class Login extends Component {
    
    constructor(props) {

        super(props); 
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false 
        }
        
        this.doCustomerLogin = this.doCustomerLogin.bind(this);
    }


    async doCustomerLogin(e) {
        const { history } = this.props;        
        e.preventDefault();
        //Here we do the logic of the login
        // const { email, password } = this.state;
        // this.setState( { loading: true, error: '' } );
        // const response = await customer.login(email.trim(), password);

        // if (!response.success) {
        //     localStorage.removeItem('bitgetToken');
        //     this.setState({
        //             error: response.message_error,
        //             loading: false
        //     });
        //     return;
        // }

        // localStorage.setItem('bitgetToken', response.data.token);
        // store.dispatch({
        //     type: 'SET_LOGGED_CUSTOMER',
        //     logged: response.success,
        //     customer: response.data
        // })

        store.dispatch({
            type: 'SET_LOGGED_CUSTOMER',
            logged: true,
            customer: {
                first_name: 'Test',
                last_name: 'User',
                email: 'ex@ex.com',
            }
        })
        history.push('/admin');
    }
        
    

    render() {
        return (
            <div className="LoginBox mh-fullscreen bg-img center-vh p-20" style={{ 'backgroundColor': '#EFEFEF' }}>
                 <canvas className="constellation"></canvas>
                    <div className="card card-shadowed p-50 w-400 mb-0 animated fadeIn" style={{maxWidth: '100%'}}>
                        <h5 className="text-uppercase text-center">Login</h5>
                        <br/><br/>
                        <div className="text-center error"> 
                                <p> {this.state.error} </p>
                        </div>
                        <form onSubmit={this.doCustomerLogin}>
                            <div className="form-group">
                                <input type="text" className="form-control" autoFocus="true" placeholder="Email" required
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
                                 <button className={"btn btn-bold btn-block btn-success " +
                                  (this.state.loading  ? 'disabled' : '')   }  
                                    type="submit">
                                    Login
                                 </button>
                            </div>
                        </form>
                    </div>       
            </div>
            )
    }

}
    
    
export default Login;
    
