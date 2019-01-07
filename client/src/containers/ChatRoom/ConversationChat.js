/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import SocketIOClient from 'socket.io-client';

import { loadMessages, sendMessage } from '../../redux/chatRoom/actions/loadMessages';


import actions from '../../redux/chatRoom/actions/createConversation';

import type { User, Friend, Conversation, Message } from '../types/types';

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

    const host = 'localhost';
    const port = '8888';
    this.socket = SocketIOClient(`http://${host}:${port}`);
    this.socket.emit('init', {
      senderId: this.props.user.myId,
    });
    this.socket.on('message', message => {
      console.log(message)
    });
  }

  componentWillMount() {
  }

  componentWillUnmount() {
    this.socket.emit('disconnect', {
      senderId: this.props.user.myId,
    });
  }


  _onSend = message => {


    const conversation = this.props.conversations[this.props.conversations.currentConversationId];
    const { user, onSendMessage } = this.props;
    this.socket.emit('message', {
      text: 'asdf',
      senderId: user.myId,
      receiverId: 'userid2',
      createdAt: new Date(),
    });
  };

  _onCreatConversation = () => {

    this.props.createConversation('userid2')
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
  //console.log(state)
  return {
    user: {myId:'userid1'},
    messages: state.messages[state.conversations.currentConversationId],
    friends: state.friends.friends,
    conversations:state.conversations,
    conversation:state.conversations[state.conversations.currentConversationId]
  };
}

export default connect(
  mapStateToProps,
  {createConversation}
)(ConversationChat);
