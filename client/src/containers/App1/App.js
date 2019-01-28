import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import Sidebar from '../SidebarGuest/Sidebar';
import Topbar from '../TopbarGuest/Topbar';
import AppRouter from './AppRouter';
import { siteConfig } from '../../settings';

import AppHolder from './commonStyle';
import './global.css';
import Background from "../../image/flower-light-scene-3-abstract-wedding-background-09_bt13rm_m__F0000.png";
import themes from '../../settings/themes';
import { themeConfig } from '../../settings';

const customizedTheme = themes[themeConfig.theme];

const { Content, Footer } = Layout;

export class App extends Component {

  render() {


    const { url } = this.props.match;
    const { height } = this.props;
    const appHeight = window.innerHeight;
    return (

        <AppHolder>
          <Layout style={{ height: appHeight }}>
            <Topbar url={url} />
            <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
              <Sidebar url={url} />

              <Layout
                className="isoContentMainLayout"
                style={{
                  height: height
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    padding: '70px 0 0',
                    flexShrink: '0',
                    backgroundImage: "url(" +Background + ")",
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                  }}
                >
                  <AppRouter url={url} />
                </Content>
                <Footer
                  style={{
                    background: customizedTheme.palette.secondary,
                    textAlign: 'center',
                    borderTop: '1px solid #ededed'
                  }}
                >
                  {siteConfig.footerText}
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>

    );
  }
}

export default connect(
  state => ({

  }),
  { }
)(App);
