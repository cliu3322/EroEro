import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/recordlist/actions";
import {  List, Icon, Avatar, Row, Col, Tag, Modal, Breadcrumb } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Papers extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.match.params)

    const {  initData } = this.props;

    initData();

    this.state = {
      visible: false,
      id:{}
    };
    //console.log(this.state.contactOptions)
  }
  componentDidMount() {
    const {  initData } = this.props;
    initData();
  }


  completeTodo(id) {
    this.setState({
      visible: true,
      id:{name:id}
    });
  }


  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a href="/guest">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="/guest">Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <List
        bordered = {true}
        pagination={{
           pageSize: 3,
         }}

        dataSource={this.props.recordlist}
        itemLayout = {'vertical'}
        loading = {false}

        renderItem={item => (
          <List.Item
            key={item._id}
            extra={<img width={150} alt="logo" src={"http://localhost:9000/images/"+item.images[0]} onClick={evt => this.completeTodo(item._id)}/>}
          >
            <List.Item.Meta
              avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
              title={<Row>
                      <Col span={6}>{item.username}</Col>
                      <Col span={6}><Tag onClick={evt => this.completeTodo(item._id)}>Tag 1</Tag></Col>
                    </Row>}
              description={
                <Row>
                  <Col span={6}>Add: {item.address}</Col>
                  <Col span={6}>Tel: {item.phone}</Col>
                  <Col span={6}>{Date(Date.now()).toString()}</Col>
                </Row>
              }
            />
            <Row>
              <Icon
                onClick={evt => this.completeTodo(item._id)}
                className="App-todo-complete"
                type="check"
              />
              <Col span={1}>
                <IconText type="star-o" text={item.reference_number} /> |
              </Col>
              <Col span={2}>
                <IconText type="like-o" text="156" /> |
              </Col>
              <Col span={2}>
                <Icon type="message"  style={{ marginRight: 8 }} onClick={evt => this.completeTodo(item._id)}/>
                {'2'}
              </Col>
            </Row>
          </List.Item>

        )}
      />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.id.name}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}




function mapStateToProps(state) {
  //console.log(state)
  return {
    recordlist: state.RecordList.recordlist
  };
}

export default connect(
  mapStateToProps,
  actions
)(Papers);
