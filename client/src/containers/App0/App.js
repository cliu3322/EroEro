import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import AppRouter from './AppRouter';
import Topbar from '../Topbar0/Topbar';

const {
  Header, Footer, Sider, Content,
} = Layout;



//import socketIOClient from 'socket.io-client'
//import { Affix, Button } from 'antd';


export class App extends Component {
  constructor() {
    super()
  }

  render() {

    const { url } = this.props.match;
    return (
      <Layout>

        <Layout>

          <Content>
            <AppRouter url={url} />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default connect(
  state => ({
  }),
  { }
)(App);
