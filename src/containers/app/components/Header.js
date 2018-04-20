import React from 'react';

const Header = ({ title , subtitle }) =>  { 
        return (
            <header className="header header-inverse" style={{ 'backgroundImage': 'linear-gradient(to top, #5BABE0 0%, #5BABE0 1%, #439BE9 100%)' }}>
                <div className="container">

                    <div className="row">
                        <div className="col-6 col-lg-8">

                            <h1>{title}</h1>

                        </div>
                    </div>

                </div>
            </header>
        )
    }



export default Header;