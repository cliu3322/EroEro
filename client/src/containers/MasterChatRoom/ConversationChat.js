/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import SocketIOClient from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';



import { loadMessages, sendMessage } from '../../redux/chatRoom/actions/loadMessages';

//import GoBack from '../components/GoBackButton';

import type { User, Friend, Message } from '../types/types';
require('./styles/ChatApp.css');
const divStyle = {
  height: '50vh',
  width: '30%'
};



class ConversationChat extends React.Component<void, Props, State> {
  socket: Object;

  static navigationOptions = ({ navigation }) => ({
    title: 'Chat',
  });

  constructor(props) {
    super(props);

    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    const host = 'localhost';
    const port = '4000';
    this.socket = SocketIOClient(`http://${host}:${port}`);
    this.socket.emit('master', {
      senderId: 'userid2',
    });
    this.socket.on('client2master:message', message => {
      this.addMessage(message);

    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    this.socket.emit('master2client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  componentWillUnmount() {
    this.socket.emit('disconnect', {
      senderId: this.props.user.myId,
    });
  }

  render() {
    return (
      <div className="container" style={divStyle}>
        <p>接线</p>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state)
  return {

  };
}

export default connect(
  mapStateToProps,
  dispatch => ({

  }),
)(ConversationChat);
