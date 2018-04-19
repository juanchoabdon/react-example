
import React , { Component }from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
class HomeComponent extends Component  {

  render() {
    return (
          <div className="Home">
          <nav className="topbar topbar-inverse topbar-expand-sm topbar-sticky">
              <div className="container">
                  
                  <div className="topbar-left">
                      <a className="topbar-brand" href="index.html">      
                            Logo
                      </a>
                  </div>


                  <div className="topbar-right">
                      <Link to="/login" className="btn btn-sm btn-white mr-4" href="#">Login</Link>
                      <Link to="/signup" className="btn btn-sm btn-outline btn-white hidden-sm-down" href="#">Signup</Link>
                  </div>

              </div>
          </nav>

          <header className="header header-inverse h-fullscreen p-0 bg-primary overflow-hidden" style={{ 'backgroundImage': 'linear-gradient(to top, #5BABE0 0%, #5BABE0 1%, #439BE9 100%)' }}>
          <canvas className="constellation"></canvas>

          <div className="container text-center">

            <div className="row h-full align-items-center">
              <div className="col-12 col-md-8 offset-md-2 align-self-center">

                <h1 className="display-4">Landing Page!.</h1>
                <br/>
                <p className="lead text-white fs-20">....</p>


              </div>
          

            </div>

          </div>
        </header>

      </div>
    )
  }
	

}
     
export default HomeComponent;
    
