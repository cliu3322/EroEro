/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import SocketIOClient from 'socket.io-client';


import { loadMessages, sendMessage } from '../../redux/chatRoom/actions/loadMessages';


//import GoBack from '../components/GoBackButton';



import { createConversation } from '../../redux/chatRoom/actions/createConversation';
import type { User, Friend, Conversation, Message } from '../types/types';


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

  static navigationOptions = ({ navigation }) => ({
    title: 'Chat',
  });

  constructor(props) {
    super(props);



    const host = 'localhost';
    const port = '8888';
    this.socket = SocketIOClient(`http://${host}:${port}`);
    console.log(`http://${host}:${port}`)
    this.socket.emit('init', {
      senderId: 'userid2',
    });
    this.socket.on('message', message => {
      console.log(message)
      // const newMessage = {
      //   createdAt: message.createdAt,
      //   text: message.text,
      //   userId: message.senderId,
      //   _id: message.msgId,
      // };
      //this.props.onSendMessage(message.conversationId, newMessage);
    });
  }

  state = {
    message: '',
    conversation:{},
  };

  componentWillMount() {
    // this.props.onLoadMessages(
    //   this.props.navigation.state.params.conversation.id,
    // );
  }

  componentWillUnmount() {
    this.socket.emit('disconnect', {
      senderId: this.props.user.myId,
    });
  }

  getConversationFriend = id => {
    const { user, friends } = this.props;
    return id === user.myId ? user.fullName : friends[id].fullName;
  };

  getMappedMessages = () => {
    return this.props.messages
      ? this.props.messages
          .map(({ _id, text, createdAt, userId }) => {
            return {
              _id,
              text,
              createdAt,
              user: {
                _id: userId,
                name: this.getConversationFriend(userId),
              },
            };
          })
          .reverse()
      : [];
  };

  _onSend = message => {


    const conversation = this.props.conversations[this.props.conversations.currentConversationId];
    const { user, onSendMessage } = this.props;
    this.socket.emit('message', {
      conversationId: this.props.conversations.currentConversationId,
      text: 'asdf',
      senderId: user.myId,
      receiverId: 'userid2',
      createdAt: new Date(),
      //msgId: message[0]._id,
    });
    // const newMessage = {
    //   createdAt: message[0].createdAt,
    //   text: message[0].text,
    //   userId:'userid1',
    //   _id: message[0]._id,
    // };
    //onSendMessage('conversation.id', newMessage);
  };

  _onCreatConversation = () => {


  }

  render() {
    return (
      <div>
        <Button onClick = {this._onCreatConversation()}>conversation</Button>

        <Button onClick = {this._onSend}>message</Button>
      </div>
      // <GiftedChat
      //   messages={this.getMappedMessages()}
      //   onSend={this._onSend}
      //   user={{ _id: this.props.user.myId }}
      // />
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
  dispatch => ({
    onLoadMessages: conversationId => {
      dispatch(loadMessages(conversationId));
    },
    onSendMessage: (conversationId, message) => {
      dispatch(sendMessage(conversationId, message));
    },
  }),
)(ConversationChat);
