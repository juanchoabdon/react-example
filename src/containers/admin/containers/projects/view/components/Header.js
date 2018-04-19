import React from 'react';
import { NavLink }  from 'react-router-dom';

const Header = ({ title , subtitle , match }) =>  { 
        return (
            <header className="header header-inverse" style={{ 'backgroundImage': 'linear-gradient(to top, #5BABE0 0%, #5BABE0 1%, #439BE9 100%)' }}>
                <div className="container">

                    <div className="row">
                        <div className="col-6 col-lg-6">

                            <h1>{title}</h1>

                        </div>
                        <div className="col-6 col-lg-6 align-self-center">

                        <div className="container">
                            <div className="text-center">
                                <ul className="nav nav-outline nav-round">
                                    <li className="nav-item w-140">
                                        <NavLink  to={`${match.url}`} exact activeClassName='active' className="nav-link">Información</NavLink>
                                    </li>
                                    <li className="nav-item w-140 hidden-sm-down">
                                        <NavLink  to={`${match.url}/milestones`}  activeClassName='active' className="nav-link">Objetivos</NavLink>
                                    </li>
                                    <li className="nav-item w-140 hidden-sm-down">
                                        <NavLink  to={`${match.url}/help`}  activeClassName='active' className="nav-link">Ayuda</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>  

                        </div>
                    </div>

                </div>
            </header>
        )
    }



export default Header;