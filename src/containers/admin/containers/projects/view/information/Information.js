import React, { Component } from 'react';
import * as firebase from 'firebase';
import store from 'store';
import Chat from './components/Chat';
import NumberFormat from 'react-number-format';
import Countdown from 'react-countdown-now';

class Information extends Component {

    getCountDown({ days, hours, minutes, seconds, completed }) {
        
                 if (days <= 10) {
                    if (days < 2) {
                        hours = hours + days * 24;
        
                        if (hours === 1 ) {
                            return `${hours} Hora`;   
                        }
        
                        return `${hours} Horas`   
                    }
        
                    return `${days} dias y ${hours} horas`;
                    
                 }
                 
                 return `${days} Dias`
          
            }

    render() {
        return (
            <div className="container">

                <div className="row">


                    <div className="col-md-4 col-sm-12 ">
                        { this.props.project.id &&
                                <div className="card card-shadowed card-hover-shadow animated fadeIn">
                                    <div className="card-block text-center team-2">

                                        <h4> Resumen </h4>

                                        <h3 style={{ 'fontWeight' : '200' }}>  
                                            Este proyecto esta en  
                                            <br/>
                                            <span style={{ 'fontWeight' : '600', 'color': 'rgb(67, 155, 233)' }}> 
                                                 {this.props.project.stage} 
                                            </span> 
                                        </h3>

                                        <br/>
                                        <div className="row">

                                            <div className="col-6"> 

                                                    <h6> Presupuesto  </h6>

                                                    <span style={{ 'fontWeight' : '600', 'color': 'rgb(67, 155, 233)' }}> 
                                                            <Budget budget={this.props.project.budget}/>
                                                    </span> 


                                            </div>

                                            <div className="col-6"> 

                                                <h6>  Tiempo   </h6>
                                                <span style={{ 'fontWeight' : '600', 'color': 'rgb(67, 155, 233)' }}> 
                                                        <Countdown date={this.props.project.deadline} renderer={this.getCountDown} />
                                                </span> 

                                            </div>

                                        </div>

                                    
                                    </div>

                            </div>  }
                           { this.props.project.id &&
                            <div className="card card-shadowed card-hover-shadow animated fadeIn">
                                <div className="card-block text-center team-2">

                                    <h4> Project Manager </h4>
                                    <a href="#">
                                        <img src="/assets/img/avatar/2.jpg" alt="..."/>
                                    </a>
                                    <h5 className="pm">{ `${this.props.project.pm.first_name} ${this.props.project.pm.last_name}` }</h5>
                                    <div className="social social-boxed social-rounded social-gray">
                                        <a className="social-facebook" href={ `mailto:${this.props.project.pm.email}` }><i className="fa fa-envelope-o"></i></a>
                                       {  this.props.project.pm.linkedin &&
                                            <a className="social-linkedin" target="_blank" href={this.props.project.pm.linkedin}><i className="fa fa-linkedin"></i></a>
                                        }
                                    </div>
                                    <p>{this.props.project.pm.description}</p>
                                    <br/>
                                   
                                </div>

                            </div>  }

                    </div>


                    <div className="col-md-8 col-sm-12">
                    
                    { this.props.project.id &&   
                        <div className="card card-shadowed card-hover-shadow animated fadeIn">
                                <div className="card-block">
                                    <Chat project={this.props.project}/>
                                </div>

                         </div> 
                    }

                    
                    </div>

                </div>
            </div>
        )
    }

}

export default Information;

const Budget = ({budget}) => {
    
        if(budget === 0) {
           return 'N/A';
        }
        
        return (
            <div>
                <NumberFormat 
                value={budget}
                displayType={'text'} 
                thousandSeparator={true}
                prefix={'$'} />
      
              { ' USD'} 
            </div>
        )
}