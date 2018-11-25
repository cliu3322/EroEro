import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../dashboard')),
  },
  {
    path: 'addRecord',
    component: asyncComponent(() => import('../RecordAdd/index.js')),
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
  {
    path: 'card',
    component: asyncComponent(() => import('../Ecommerce/card')),
  },
  {
    path: 'cart',
    component: asyncComponent(() => import('../Ecommerce/cart')),
  },
  {
    path: 'checkout',
    component: asyncComponent(() => import('../Ecommerce/checkout')),
  },
  {
    path: 'shop',
    component: asyncComponent(() =>
      import('../Ecommerce/algolia/instantSearch')
    ),
  },
  {
    path: 'op_collapse',
    component: asyncComponent(() => import('../Uielements/Collapse')),
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
