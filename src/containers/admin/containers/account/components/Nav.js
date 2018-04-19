import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';

const Nav = ({match}) => (

          <ul className="nav nav-vertical">
            <li className="nav-item">
              <NavLink to={`${match.path}/`} exact activeClassName='active' className="nav-link">
                <h6>Perfil</h6>
                <p>Visualiza y modifica tu información</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${match.path}/team`}  activeClassName='active' className="nav-link">
                <h6>Tu equipo</h6>
                <p>Vizualiza y modifica tus colaboradores</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to={`${match.path}/security`}  activeClassName='active' className="nav-link">
                <h6>Seguridad</h6>
                <p>Modifica tus credenciales</p>
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