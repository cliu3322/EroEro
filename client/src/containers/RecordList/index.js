import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/recordlist/actions";
import {  List, Icon, Avatar, Row, Col, Tag, Modal, Breadcrumb, Carousel } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Papers extends Component {
  constructor(props) {
    super(props);

    const {  initData } = this.props;

    initData(this.props.match.params);

    this.state = {
      visible: false,
      id:'',
      myrecord:{}
    };
    //console.log(this.state.contactOptions)
  }


  popup(id) {
    console.log(this.props.recordlist.find(x => x._id === id))
    this.setState({
      visible: true,
      id:id,
      myrecord:this.props.recordlist.find(x => x._id === id)
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
          <Breadcrumb.Item><a href="/guest">Home</a></Breadcrumb.Item>
        </Breadcrumb>
        <List
        bordered = {true}
        pagination={{
           pageSize: 10,
         }}

        dataSource={this.props.recordlist}
        itemLayout = {'vertical'}
        loading = {false}

        renderItem={item => (
          <List.Item
            key={item._id}
            extra={<img width={150} alt="logo" src={"http://localhost:9000/images/"+item.images[0]} onClick={evt => this.popup(item._id)}/>}
          >
            <List.Item.Meta
              title={<Row>
                      <Col span={6}>{item.username}</Col>
                      <Col span={6}><Tag onClick={evt => this.popup(item._id)}>Tag 1</Tag></Col>
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
                onClick={evt => this.popup(item._id)}
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
                <Icon type="message"  style={{ marginRight: 8 }} onClick={evt => this.popup(item._id)}/>
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
          <Carousel autoplay>
            {this.state.myrecord.images &&
              this.state.myrecord.images.map((image) =>
                <img width={150} alt="logo" src={"http://localhost:9000/images/"+image} />
              )
            }
          </Carousel>
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
