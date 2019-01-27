import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/myPost/actions";
import {  Table, Divider } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="google.com">{text}</a>,
}, {
  title: 'Create Date',
  dataIndex: 'createdate',
  key: 'cdate',
}, {
  title: 'Post Date',
  dataIndex: 'postdate',
  key: 'pdate',
}, {
  title: 'Status',
  key: 'status',
  dataIndex: 'status',
  render: status => (
    <span>
      {status}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="google.com">Edit</a>
      <Divider type="vertical" />
      <a href="google.com">Delete</a>
    </span>
  ),
}];

class MyPost extends Component {
  constructor(props) {
    super(props);

    const {  initData } = this.props;

    initData(this.props.user);

    console.log(this.props.myPostList)
    this.state = {

    };
    //console.log(this.state.contactOptions)
  }


  render() {
    return (
      <Table columns={columns}  rowKey={record => record._id}  dataSource={this.props.myPostList} />
    );
  }
}




function mapStateToProps(state) {

  return {
    user:state.Auth.username,
    myPostList: state.MyPost.mypost
  };
}

export default connect(
  mapStateToProps,
  actions
)(MyPost);
