import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Button, Icon } from "antd";
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
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    const styling1 = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            "isomorphicTopbar"
          }
        >
          <div>
            <img alt="logo" src="https://www.brandsupply.com/upload/project_files/5dc04a5b7790ec9424537d4dd40e89b3.png" style={styling1}/>
          </div>

          <ul className="isoRight" >
            <Button type="primary">
              <Icon type="upload" />POST AD
            </Button>
            <Button type="primary">
              <Icon type="dollar" />DONATE
            </Button>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App
  }),
  { toggleCollapsed }
)(Topbar);
