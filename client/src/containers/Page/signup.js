import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../../components/uielements/input";
import Checkbox from "../../components/uielements/checkbox";
import Button from "../../components/uielements/button";
import authAction from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import IntlMessages from "../../components/utility/intlMessages";
import SignUpStyleWrapper from "./signup.style";

const { login, signup } = authAction;
const { clearMenu } = appActions;

class SignUp extends Component {
  constructor(props) {
    super(props);

    console.log('props',props)
  }
  state = {
    redirectToReferrer: false
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleSignup = () => {
    const { signup, history } = this.props;
    const userInfo = {
      username: document.getElementById('inputUserName').value || '',
      email: document.getElementById('inputEmail').value,
      password: document.getElementById('inpuPassword').value || '',
    };
    console.log(userInfo);
    signup({ history, userInfo });
  };
  render() {
    return (
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signUpTitle" />
              </Link>
            </div>

            <div className="isoSignUpForm">

              <div className="isoInputWrapper">
                <Input id="inputUserName" size="large" placeholder="Username" />
              </div>

              <div className="isoInputWrapper">
                <Input id="inputEmail" size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Input id="inpuPassword" size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="isoInputWrapper" style={{ marginBottom: "50px" }}>
                <Checkbox>
                  <IntlMessages id="page.signUpTermsConditions" />
                </Checkbox>
              </div>

              <div className="isoInputWrapper">
                <Button type="primary" onClick={this.handleSignup}>
                  <IntlMessages id="page.signUpButton" />
                </Button>
              </div>
              <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
                <Link to="/signin">
                  <IntlMessages id="page.signUpAlreadyAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignUpStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.token !== null ? true : false
  }),
  { login, signup, clearMenu }
)(SignUp);
