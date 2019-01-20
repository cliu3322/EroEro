import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Button, Icon, Row, Col } from "antd";
import appActions from "../../redux/app/actions";
import TopbarWrapper from "./topbar.style";
import themes from "../../settings/themes";
import { themeConfig } from "../../settings";

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  render() {

    const styling = {
      background: 'white',
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
            <Col span={8}>
              <img alt="logo" src="https://www.brandsupply.com/upload/project_files/5dc04a5b7790ec9424537d4dd40e89b3.png" style={styling1}/>
            </Col>
            <Col span={12}>
            </Col>
            <Col span={4}>
              <Button type="primary">
                <Icon type="upload" />POST AD
              </Button>
              <Button type="primary">
                <Icon type="dollar" />DONATE
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
