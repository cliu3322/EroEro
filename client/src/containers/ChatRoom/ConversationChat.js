/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import SocketIOClient from 'socket.io-client';

//import { loadMessages, sendMessage } from '../../redux/chatRoom/actions/loadMessages';


import actions from '../../redux/chatRoom/actions/createConversation';

import type { User, Friend, Message } from '../types/types';

const { createConversation } = actions;


type Props = {
  onSendMessage: (string, Message) => Message,
  onLoadMessages: string => Message[],
  navigation: any,
  messages?: Message[],
  user: User,
  friends: { [key: string]: Friend },
};

type State = {
  message: string,
};

class ConversationChat extends React.Component<void, Props, State> {
  socket: Object;


  constructor(props) {
    super(props);
    //console.log(props)
    const host = 'localhost';
    const port = '3000';
    this.socket = SocketIOClient(`http://${host}:${port}`);
    this.socket.emit('init', {
      senderId: this.props.username,
    });
    this.socket.on('message', message => {
      console.log('onMessage',message)
    });
  }

  componentWillMount() {
  }

  componentWillUnmount() {
    this.socket.emit('disconnect', {
      senderId: this.props.id,
    });
  }


  _onSend = message => {


//    const conversation = this.props.conversations[this.props.conversations.currentConversationId];
    this.socket.emit('message', {
      text: 'asdf',
      senderId: this.props.username,
      receiverId: this.props.currentconversation.userTwoId,
      conversationId:this.props.currentconversation._id,
      createdAt: new Date(),
    });
  };

  _onCreatConversation = () => {
    this.props.createConversation({friendname:'master',username:this.props.username})
  }

  render() {
    return (
      <div>
        <Button onClick = {this._onCreatConversation}>conversation</Button>
        <Button onClick = {this._onSend}>message</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username:state.Auth.username,
    messages: state.messages[state.conversations.currentConversationId],
    friends: state.friends.friends,
    conversations:state.conversations,
    currentconversation:state.conversations.conversations[0]
  };
}

export default connect(
  mapStateToProps,
  {createConversation}
)(ConversationChat);
