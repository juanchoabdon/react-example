import React, { Component } from 'react';
import * as firebase from 'firebase';
import NumberFormat from 'react-number-format';
import Countdown from 'react-countdown-now';
class Milestones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            milestones: [],
            milestonesRef: [],
            spent: 0,
            remaining: 0,
            selectedMilestone: false
        }
        this.fetchMilestones = this.fetchMilestones.bind(this);        
    }

    componentDidMount() {
        this.setState({
            milestones: []
        }, () => { 
            this.fetchMilestones();
        })
    }
    

    fetchMilestones() {

        const milestonesRef = firebase.database().ref(`milestones/${this.props.project.id}`);
        
        
        this.setState({  milestonesRef });


        milestonesRef.on('value', snapshot => 
        {  
            const ms = snapshot.val();
            let milestones = [];
            let spent = 0;
            let remaining = this.props.project.budget;
            
            for(var key in ms)
            {   
                ms[key].key = key;
                console.log(spent, ms[key].budget)
                spent = spent + Number(ms[key].budget);
                remaining = remaining - Number(ms[key].budget);

                milestones.push(ms[key]);

            }

            this.setState({
                milestones,
                spent,
                remaining
            })

        })

    }

    componentWillUnmount() {
        
        if (this.state.milestonesRef.length) {
            this.state.milestonesRef.off();
        }
        
    }

    getCountDown({ days, hours, minutes, seconds, completed }) {
        
                 if (days <= 10) {
                    if (days < 2) {
                        hours = hours + days * 24;
        
                        if (hours === 1 || hours === 0 ) {
                            return `${hours} Horas restantes`;   
                        }
        
                        return `${hours} Horas restantes`   
                    }
        
                    return `${days} dias y ${hours} horas restantes`;
                    
                 }
                 
                 return `${days} Dias restantes`
          
        }

    render() {
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-md-12">
                         <div className="metrics">
                            <div className="row text-center container">
                                <div className="col">
                                    <p>Presupuesto</p>
                                    <h2>
                                        <NumberFormat value={this.props.project.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />          
                                    </h2>
                                </div>

                                <div className="col">
                                    <p>Gastado</p>
                                    <h2> <NumberFormat value={this.state.spent} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </h2>
                                </div>

                                <div className="col">
                                    <p>Faltante</p>
                                    <h2>
                                        <NumberFormat value={this.state.remaining} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </h2>
                                </div>
                            </div>
                         </div>
                         <br/>
                        <div className="card card-shadowed card-hover-shadow animated fadeIn">
                            <table className="table table-cart">
                                <tbody valign="middle">
                                    { 
                                        this.state.milestones.map( (milestone, key) => (
                                            <tr className="animated fadeIn" key={key}>                                                
                                                <td>
                                                    <h4>{milestone.title}</h4>
                                                </td>
                            
                                                <td>
                                                      <p> {milestone.status} </p>
                                                </td>

                                                                            
                                                <td>
                                                   <h5> <Countdown date={milestone.deadline} renderer={this.getCountDown} /> </h5>
                                                </td>
                            
                                                <td>
                                                    <h4 className="price">
                                                         <NumberFormat value={milestone.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />                           
                                                    </h4>
                                                </td>
                                            </tr>      
                                        ))
                                    }           
                                </tbody>
                            </table>
                        </div>  
                        <br/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Milestones;