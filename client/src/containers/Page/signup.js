import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Form, Input, Checkbox, Button,
} from 'antd';

import authAction from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import IntlMessages from "../../components/utility/intlMessages";
import SignUpStyleWrapper from "./signup.style";

import notifications from '../../components/feedback/notification';

const { login, signup } = authAction;
const { clearMenu } = appActions;


const openNotificationWithIcon = type => {
  notifications[type]({
    message: 'Warning',
    description:
      'Please read and check the agreement.'
  });
};

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      confirmDirty: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (values.agreement) {
          console.log('Received values of form: ', values);

          const { signup, history } = this.props;
          const userInfo = {
            username: values.username || '',
            email: values.email,
            password: values.password || '',
          };
          signup({ history, userInfo });
        }
        else {
          openNotificationWithIcon('warning')
          console.log('Please read and check the agreement')
        }
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    console.log(this.state.confirmDirty)
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signUpTitle" />
              </Link>
            </div>

            <Form onSubmit={this.handleSubmit}>
              <Form.Item
                {...formItemLayout}
                label={(
                  <span>
                    Username
                  </span>
                )}
              >
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                })(
                  <Input />
                )}
              </Form.Item>
               <Form.Item
                 {...formItemLayout}
                 label="E-mail"
               >
                 {getFieldDecorator('email', {
                   rules: [{
                     type: 'email', message: 'The input is not valid E-mail!',
                   }, {
                     required: true, message: 'Please input your E-mail!',
                   }],
                 })(
                   <Input />
                 )}
               </Form.Item>
               <Form.Item
                 {...formItemLayout}
                 label="Password"
               >
                 {getFieldDecorator('password', {
                   rules: [{
                     required: true, message: 'Please input your password!',
                   }, {
                     validator: this.validateToNextPassword,
                   }],
                 })(
                   <Input type="password" />
                 )}
               </Form.Item>
               <Form.Item
                 {...formItemLayout}
                 label="Confirm Password"
               >
                 {getFieldDecorator('confirm', {
                   rules: [{
                     required: true, message: 'Please confirm your password!',
                   }, {
                     validator: this.compareToFirstPassword,
                   }],
                 })(
                   <Input type="password" onBlur={this.handleConfirmBlur} />
                 )}
               </Form.Item>
               <Form.Item {...tailFormItemLayout}>
                 {getFieldDecorator('agreement', {
                   valuePropName: 'checked',
                 })(
                   <Checkbox>I have read the <a href="/">agreement</a></Checkbox>
                 )}
               </Form.Item>
               <Form.Item {...tailFormItemLayout}>
                 <Button type="primary" htmlType="submit">Register</Button>
               </Form.Item>
             </Form>
          </div>
        </div>
      </SignUpStyleWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Auth.token !== null ? true : false
  };
}


const WrappedSignUp = Form.create()(SignUp);

export default connect(mapStateToProps, { login, signup, clearMenu } )(WrappedSignUp);
