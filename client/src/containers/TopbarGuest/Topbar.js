import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Button, Icon, Row, Col } from "antd";
import appActions from "../../redux/app/actions";

import themes from "../../settings/themes";
import { themeConfig } from "../../settings";
import { Link } from 'react-router-dom';


import Marquee from 'grand-marquee-react';

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  render() {

    const styling = {
      background: customizedTheme.palette.secondary,
      position: "fixed",
      width: "100%",
      height: 70,
      zIndex: 1,
    };
    const styling1 = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      height: 70
    };
    return (

        <Header
          style={styling}
          className={
            "isomorphicTopbar"
          }
        >
          <Row>
            <Col span={4}>
              <img alt="logo" src="https://www.brandsupply.com/upload/project_files/5dc04a5b7790ec9424537d4dd40e89b3.png" style={styling1}/>
            </Col>
            <Col span={18}>

              <Marquee
               totalDisplays={2}
               display1={'老铁赚了钱就得麻溜的赶紧花啊。'}
               display2={'在别的地方花不如在我们这，十分带劲'}
               changeTime={10000}
               crossTime={16000}
               htmlTag={'h2'}
               color={'purple'}
             />
            </Col>
            <Col span={2}>
              <Button type="default" ghost={true} size={'small'}>
                <Link to="/signin">
                  <Icon type="upload" />POST AD
                </Link>
              </Button>
            </Col>
          </Row>
        </Header>

    );
  }
}

export default connect(
  state => ({
    ...state.App
  }),
  { toggleCollapsed }
)(Topbar);
