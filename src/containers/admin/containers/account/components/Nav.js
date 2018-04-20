import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';

const Nav = ({match}) => (

          <ul className="nav nav-vertical">
            <li className="nav-item">
              <NavLink to={`${match.path}/`} exact activeClassName='active' className="nav-link">
                <h6>My profile</h6>
                <p>Text</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${match.path}/team`}  activeClassName='active' className="nav-link">
                <h6>Information</h6>
                <p>Text</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to={`${match.path}/security`}  activeClassName='active' className="nav-link">
                <h6>Security</h6>
                <p>Trxt</p>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to={`${match.path}/settings`} activeClassName='active' className="nav-link" >
                <h6>Configuración</h6>
                <p>Some description about tab</p>
              </NavLink>
            </li> */}
          </ul>
   
)

export default Nav;