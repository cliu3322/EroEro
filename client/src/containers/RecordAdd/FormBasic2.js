import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Input, Divider, Checkbox, Select, Table, Tag} from 'antd';
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

    this.columns = [{
      title: 'Contact Method',
      dataIndex: 'method',
      key: 'method',
    }, {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => (
        this.state.dataSource.length >= 1
          ? (
              <a href="javascript:;">Delete</a>
          ) : null
      ),
    }];

    this.state = {
      dataSource : [{
        key: '1',
        method: 'Phone',
        content: 31231231233,
      }, {
        key: '2',
        method: 'Email',
        content: 'gasdf@gmail.com',
      }]
    };
    //console.log(this.state.contactOptions)
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        var data = this.props.form.getFieldsValue()
        data.username = this.props.user
        console.log(data)
        // this.props.addBasic(data)
        // this.props.handler('2');
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;



    const contactOptions = [
      { label: 'Alternative Phone', value: 'aphone' },
      { label: 'email', value: 'email' },
      { label: 'WeChat', value: 'weChat' },
      { label: 'Line', value: 'line' },
      { label: 'Whatsapp', value: 'whatsapp' },
      { label: 'Kakao', value: 'kakao' },
    ];
    const options = contactOptions.map(d => <Select.Option key={d.value}>{d.label}</Select.Option>)

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
          {getFieldDecorator('name', {
            rules: [{
              required: true,

              message: 'Please input your name',
            }],
          })(
            <Input placeholder="Please input your name" />
          )}
        </Form.Item>
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
        <Divider orientation="left">Service</Divider>
        <Form.Item {...formItemLayout} label="Service">
          {getFieldDecorator('service', {
            initialValue: ['incall'],
          })(
            <Checkbox.Group options={serviceOptions} />
          )}
        </Form.Item>

        <Divider orientation="left">Contact</Divider>

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
              <div>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  {options}
                </Select>
                <Input placeholder="Please inputc your phone" style={{ width: 120 }} />
                <Button type="primary">
                  Add
                </Button>
              </div>

            <Table dataSource={this.state.dataSource} columns={this.columns} />
        </div>


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
    user:state.Auth.username
  };
}

const WrappedFormBasic = Form.create()(FormBasic);

export default connect(mapStateToProps, {addBasic})(WrappedFormBasic);
