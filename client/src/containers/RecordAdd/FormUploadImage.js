import React, { Component } from 'react';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Uppy from "../../components/uielements/uppy";
import config from "./config";
import UppyStyleWrapper from "./uppy.style";
const FormItem = Form.Item;

class FormUploadImage extends Component {
  state = {
  };
  componentDidMount() {
    Uppy(config);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
            <UppyStyleWrapper id="uppyHolder" />
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

const WrappedFormUploadImage = Form.create()(FormUploadImage);
export default WrappedFormUploadImage;
