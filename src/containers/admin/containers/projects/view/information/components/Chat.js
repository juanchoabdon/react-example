import React, { Component } from 'react';
import project from 'api/project';
import * as firebase from 'firebase';
import store from 'store';
import momentUtil  from 'utils/moment';
import './Chat.css';

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: [],
            chatRef: [],
            invitation_email: '' ,
            success_invite: '',
            error_invite: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.getChatMessages = this.getChatMessages.bind(this);
        this.invitateToProject = this.invitateToProject.bind(this);

    }


    componentDidMount() {
        if (this.props.project.id) {
            this.getChatMessages(this.props)
        }
    }

    getChatMessages({ project }) {

        this.setState( { messages: [] });

        const chatRef = firebase.database().ref(`chat/${project.id}`);

        this.setState({  chatRef });

        chatRef.on( 'child_added',  (snapshot, prevChildKey) => 
        { 
            const messages = this.state.messages;
            this.checkScroll();
            messages.push(snapshot.val());
            this.setState({
                messages
             }, () =>  this.checkScroll() );
        })

    }


    componentWillReceiveProps(nextProps) {
        if ( nextProps.project ) {
            this.getChatMessages(nextProps)
        }
    }

    componentWillUnmount() {

        if (this.state.chatRef.length) {
            this.state.chatRef.off();
        }

    }

    checkScroll() {
        const chat = this.refs.chat;

        if (chat) {
          const shouldScroll = chat.scrollTop + chat.clientHeight === chat.scrollHeight;
          if (!shouldScroll) {
              chat.scrollTop = chat.scrollHeight;
          }
         }
    }
     

    sendMessage(e) {
        if ( e.key === 'Enter' ) {

            const message = this.refs.message;
            e.preventDefault();

            if (!message.value) {
                return;
            }

            const { loggedCustomerState } = store.getState();
            const timestamp = momentUtil.getNowTime();
            firebase.database().ref(`chat/${this.props.project.id}`).push({
                message: this.state.message,
                userId: loggedCustomerState.customer.id,
                timestamp,
                name: `${loggedCustomerState.customer.first_name} ${loggedCustomerState.customer.last_name}`
            }) 
            message.value = '';
            this.setState({
                message: ''
            })

        }   
    }

   async invitateToProject(e) {
        e.preventDefault();
        const { loggedCustomerState } = store.getState();
        const data = {
          email: this.state.invitation_email, 
          project_id: this.props.project.id, 
          company: loggedCustomerState.customer.company
        }
        const response = await project.invite(data);


        if (!response.success) {
            this.setState({
              error_invite: response.message_error
            }, () => {
              setTimeout(() => {
                  this.setState({
                    error_invite: ''
                  })
              }, 5000)
            } );
            return;
        }

        this.setState({
          invitation_email: '',
          success_invite: response.data
        } , () => {
          setTimeout(() => {
              this.setState({
                success_invite: ''
              })
          }, 5000)
        } )

    }
    render() {
        const { loggedCustomerState } = store.getState();
        return (
            <div className="clearfix">
            <div className="chat">
              <div className="chat-header clearfix">     
                <div className="chat-about">
                  <h5>Chat con el equipo</h5>
                </div>
              </div>
              
              <div className="chat-history" ref="chat">
                <ul>

                    {
                         this.state.messages.map( (message, key) => {

                             if (message.userId) {
                                return  (
                                    <li key={key} className="clearfix  animated fadeIn">
                                        <div className="message-data align-right animated fadeIn">
                                            <span className="message-data-time" >
                                                { momentUtil.getDate(message.timestamp) }
                                            </span> &nbsp; &nbsp;
                                            <span className="message-data-name" >{message.name}</span> <i className="fa fa-circle me"></i>
                                        
                                        </div>
                                        <div className="message other-message float-right">
                                            {message.message}
                                        </div>
                                    </li>
                                )
                                }
                                return (
                                    <li key={key} className="animated fadeIn">
                                        <div className="message-data animated fadeIn">
                                            <span className="message-data-name"><i className="fa fa-circle online"></i>{message.name}</span>
                                            <span className="message-data-time">
                                               { momentUtil.getDate(message.timestamp) }
                                            </span>
                                        </div>
                                        <div className="message my-message">
                                                {message.message}
                                        </div>
                                    </li>
                                )
                            
                             
                          } )

                    }  

                
                </ul>
                
              </div> 
              
              <div className="chat-message clearfix">
                <textarea name="message-to-send" id="message-to-send" placeholder ="Escribe tu mensaje..." rows="3"
                onChange={ (e) => {  this.setState( {  message: e.target.value  } )  } }  
                onKeyPress={ this.sendMessage }
                value={this.state.message}
                autoFocus="true"
                ref="message">
                </textarea>

                <p style={{'fontWeight': '600'}}> Invita tu equipo a este chat ! </p>       
                <div className="row text-center">
                  <div className="col-6">

                      <form onSubmit={this.invitateToProject} className="input-group">
                        <input type="email" value={this.state.invitation_email} onChange={ (e) => this.setState({
                          invitation_email: e.target.value
                        }) } className="form-control" placeholder="Email" required/>
                        <span className="input-group-btn">
                          <button  className="btn" type="submit">Invitar!</button>
                        </span>
                        
                      </form>
                        <br/>
                    { this.state.success_invite &&  <p className="success animated fadeIn">  {this.state.success_invite} </p>  }
                    { this.state.error_invite &&  <p className="error animated fadeIn">  {this.state.error_invite} </p>  }

                  </div>

                </div>
                        
              </div>
              
            </div> 
            

                {/* <div> 

                    {
                         this.state.messages.map( (message, key) => (
                            <p key={key}> {message.message}  </p> 
                         ) )

                    }

                 </div>


                <input  value={this.state.message} 
                placeholder="Escribe tu mensaje"
                onChange={ (e) => {  this.setState( {  message: e.target.value  } )  } }  
                onKeyPress={ this.sendMessage }
                /> */}
          </div> 

        )
    }

}

export default Chat;