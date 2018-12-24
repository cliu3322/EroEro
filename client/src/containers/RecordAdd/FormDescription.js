import React, { Component } from 'react';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Async from '../../helpers/asyncComponent';


const FormItem = Form.Item;

const Editor = props => (
  <Async
    load={import(/* webpackChunkName: "forms-editor" */ '../../components/uielements/editor.js')}
    componentProps={props}
  />
);

class FormDescription extends Component {
  state = {
  };

  render() {

    const onEditorStateChange = editorState => {
      this.setState({ editorState });
    };
    const editorOption = {
      style: { width: '90%', height: '70%' },
      editorState: this.state.editorState,
      toolbarClassName: 'home-toolbar',
      wrapperClassName: 'home-wrapper',
      editorClassName: 'home-editor',
      onEditorStateChange: onEditorStateChange,
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
            <Editor {...editorOption} />
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

const WrappedFormDescription = Form.create()(FormDescription);
export default WrappedFormDescription;
