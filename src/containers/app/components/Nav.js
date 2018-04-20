import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import store from 'store';
import customer from 'api/customer'; 

const Nav = ( {match} ) =>  { 

    const { loggedCustomerState } = store.getState();
    const loggedCustomer = loggedCustomerState.customer;
 
        return (
            <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
                <div className="container">

                    <div className="topbar-left">
                        <button className="topbar-toggler">&#9776;</button>
                        <Link to="/app" className="topbar-brand" style={{ color: 'white' }}>
                              <h4> Logo </h4>
                        </Link>
                    </div>

                    <div className="topbar-right">
                        <ul className="topbar-nav nav">
                            <li className="nav-item">
                                <NavLink to={`${match.path}/people`} exact className="nav-link" activeClassName='active'>People</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`${match.path}/groups`}  activeClassName='active' className="nav-link">Groups</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`${match.path}/messaging`}  activeClassName='active' className="nav-link">Messaging</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> { `${loggedCustomer.first_name}` } <i className="fa fa-caret-down"></i></a>
                                <div className="nav-submenu align-right">
                                    <NavLink  to={`${match.path}/account`} activeClassName='active' className="nav-link" href="#" >My account</NavLink>
                                    <a className="nav-link" href="#" onClick={customer.logout}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }



export default Nav;