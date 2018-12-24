import React, { Component } from 'react';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Input from '../../components/uielements/input';
import Radio, { RadioGroup } from '../../components/uielements/radio';
const FormItem = Form.Item;


class FormBasic extends Component {
  state = {
  };

  render() {


    return (
      <Form>
        <FormItem label='Name'>
          <Input placeholder="Name" />
        </FormItem>
        <FormItem label='Contant'>
          <Input placeholder="Phone" />
        </FormItem>
        <FormItem label='Race'>
          <RadioGroup >
            <Radio value={11}>Asian</Radio>
            <Radio value={22}>Caucasion</Radio>
            <Radio value={32}>C</Radio>
            <Radio value={43}>D</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedFormBasic = Form.create()(FormBasic);
export default WrappedFormBasic;
