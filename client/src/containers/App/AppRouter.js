import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../dashboard')),
  },
  {
    path: 'chatRoom',
    component: asyncComponent(() => import('../ChatRoom/ConversationChat.js')),
  },
  {
    path: 'masterChatRoom',
    component: asyncComponent(() => import('../MasterChatRoom/ConversationChat.js')),
  },
  {
    path: 'addRecord',
    component: asyncComponent(() => import('../RecordAdd/index.js')),
  },
  {
    path: 'MyPost',
    component: asyncComponent(() => import('../MyPost/index.js')),
  },
  {
    path: 'recordList',
    component: asyncComponent(() => import('../RecordList/index.js')),
  },
  {
    path: 'recordPage',
    component: asyncComponent(() => import('../RecordPage/recordPage')),
  },
  {
    path: 'blankPage',
    component: asyncComponent(() => import('../blankPage')),
  },
  {
    path: 'authCheck',
    component: asyncComponent(() => import('../AuthCheck')),
  },

];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
