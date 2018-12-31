import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Input, Divider, Checkbox, Select,} from 'antd';
import Button from '../../components/uielements/button';
import actions from '../../redux/recordAdd/actions.js';

const { addBasic } = actions;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class FormBasic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactOptions: ['pphone'],
    };
    //console.log(this.state.contactOptions)
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addBasic(this.props.form.getFieldsValue())
        this.props.handler('2');
      }
    });

  }

  onChange = (checkedValues) =>{
    this.setState({
      contactOptions: checkedValues,
    },() => {});

  }
  render() {
    const { getFieldDecorator } = this.props.form;



    const contactOptions = [
      { label: 'Primary Phone', value: 'pphone', disabled: true },
      { label: 'Alternative Phone', value: 'aphone' },
      { label: 'email', value: 'email' },
      { label: 'WeChat', value: 'weChat' },
      { label: 'Line', value: 'line' },
      { label: 'Whatsapp', value: 'whatsapp' },
      { label: 'Kakao', value: 'kakao' },
    ];
    const contactOK = [
      { label: 'Please text me', value: 'SMS' },
      { label: 'Please call me', value: 'call' },
    ];
    const serviceOptions = [
      { label: 'Incall', value: 'incall' },
      { label: 'Outcall', value: 'outcall' },
    ];

    return (
      <Form onSubmit={this.handleSubmit}>
        <Divider orientation="left">Name</Divider>
        <Form.Item {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [{
              required: true,

              message: 'Please input your name',
            }],
          })(
            <Input placeholder="Please input your name" />
          )}
        </Form.Item>
        <Divider orientation="left">Contact</Divider>

        <Form.Item {...formItemLayout} label="Contact Method">
          {getFieldDecorator('contactmethod', {
            initialValue: ['pphone'],
          })(
            <Checkbox.Group checked={this.props.contactOptions} options={contactOptions} onChange={this.onChange}/>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Contact Way">
          {getFieldDecorator('contactway', {
            initialValue: ["SMS"],
          })(
            <Checkbox.Group options={contactOK} />
          )}
        </Form.Item>
        <Divider orientation="left">Contact Detail</Divider>
        <div>
          <Form.Item {...formItemLayout} label="Phone">
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Please input your phone',
              }],
            })(
              <Input placeholder="Please inputc your phone" />
            )}
          </Form.Item>

          {this.state.contactOptions.includes('email') ? (
            <Form.Item {...formItemLayout} label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                ]
              })(<Input />)}
            </Form.Item>
          ) : null}
          {this.state.contactOptions.includes('aphone') ? (
            <Form.Item {...formItemLayout} label="Alternative Phone">
              {getFieldDecorator('aphone', {
                rules: [{
                  message: 'Please input your phone',
                }],
              })(
                <Input placeholder="Please input your phone" />
              )}
            </Form.Item>
          ) : null}
          {this.state.contactOptions.includes('whatsapp') ? (
            <Form.Item {...formItemLayout} label="Whatsapp">
              {getFieldDecorator('whatsapp', {
                rules: [{
                  required: false,
                  message: 'Please input your whatsapp ID',
                }],
              })(
                <Input placeholder="Please input your whatsapp ID" />
              )}
            </Form.Item>
          ) : null}
          {this.state.contactOptions.includes('line') ? (
            <Form.Item {...formItemLayout} label="Line">
              {getFieldDecorator('line', {
                rules: [{
                  required: false,
                  message: 'Please input your Line ID',
                }],
              })(
                <Input placeholder="Please input your Line ID" />
              )}
            </Form.Item>
          ) : null}
          {this.state.contactOptions.includes('weChat') ? (
            <Form.Item {...formItemLayout} label="WeChat">
              {getFieldDecorator('weChat', {
                rules: [{
                  required: false,
                  message: 'Please input your WeChat ID',
                }],
              })(
                <Input placeholder="Please input your WeChat ID" />
              )}
            </Form.Item>
          ) : null}
          {this.state.contactOptions.includes('kakao') ? (
            <Form.Item {...formItemLayout} label="Kakao">
              {getFieldDecorator('kakao', {
                rules: [{
                  required: false,
                  message: 'Please input your Kakao ID',
                }],
              })(
                <Input placeholder="Please input your Kakao ID" />
              )}
            </Form.Item>
          ) : null}
        </div>
        <Divider orientation="left">Ethnicity</Divider>
        <Form.Item {...formItemLayout} label="Ethnicity">
          {getFieldDecorator('ethnicity', {
            initialValue: "asian",
          })(
            <Select >
              <Select.Option value="asian">Asian</Select.Option>
              <Select.Option value="caucasion">Caucasion</Select.Option>
              <Select.Option value="aa">African American</Select.Option>
              <Select.Option value="mixed">Mixed</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Service">
          {getFieldDecorator('service', {
            initialValue: ['incall'],
          })(
            <Checkbox.Group options={serviceOptions} />
          )}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

const WrappedFormBasic = Form.create()(FormBasic);

export default connect(mapStateToProps, {addBasic})(WrappedFormBasic);
