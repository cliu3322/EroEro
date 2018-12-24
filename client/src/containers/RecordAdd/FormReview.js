import React, { Component } from 'react';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';

const FormItem = Form.Item;


class FormReview extends Component {
  state = {
  };

  render() {


    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>

        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Complete and Donate
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedFormReview = Form.create()(FormReview);
export default WrappedFormReview;
