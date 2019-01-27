import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import actions from '../../redux/recordAdd/actions.js';

const { updateStatus } = actions;
const FormItem = Form.Item;


class FormReview extends Component {
  state = {
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var data = {};
    data.status = 'posted';
    data.id = this.props.id
    this.props.updateStatus(data)


  }

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

function mapStateToProps(state) {
  console.log(state)
  return {
    id:state.RecordAdd._id,
  };
}

const WrappedFormReview = Form.create()(FormReview);
export default connect(mapStateToProps,{ updateStatus } )(WrappedFormReview);
