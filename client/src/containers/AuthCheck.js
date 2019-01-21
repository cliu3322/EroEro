import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import Button from '../components/uielements/button';
import notification from '../components/notification';
import AuthHelper from '../helpers/authHelper';

class AuthCheck extends Component {
  state = { loading: false };
  checkDemo = () => {
    this.setState({ loading: true });
    AuthHelper.checkDemoPage(this.props.token).then(result => {
      if (result.error) {
        notification('error', result.error);
      } else {
        notification('success', `status: ${result.status}`, result.message);
      }
      this.setState({ loading: false });
    });
  };
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <Button loading={this.state.loading} onClick={this.checkDemo}>
            Check Auth Status
          </Button>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.Auth.idToken,
  };
}

export default connect(
  mapStateToProps,{}
)(AuthCheck);
