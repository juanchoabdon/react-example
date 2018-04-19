import React, { Component } from 'react';
import './Loading.css';

const Loading = () => (
    <div>
        <div className="row loading">
            <div className="col-12 align-self-center text-center">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    </div>
)

export default Loading;