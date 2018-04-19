import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <section className="section py-100">
        <div className="container">
            <header className="section-header">
                <small>Oops</small>
                <h2>Página no encontrada!</h2>
                <hr/>
                <p className="lead">Parece que estas buscando algo que no existe.</p>
            </header>
            <br/>
            <p className="text-center">
                <Link className="btn btn-primary" to="/">Volver al inicio</Link>
            </p>
        </div>
  </section>
)

export default NotFound;