import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/recordlist/actions";
import {  List, Icon, Avatar, Row, Col, Tag } from 'antd';

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
    initData();
    //console.log(this.state.contactOptions)
  }
  componentDidMount() {
    const {  initData } = this.props;
    initData();
  }



  render() {

    // profileItems = papers.map(paper => (
    //   <ProfileItem key={paper._id} paper={paper} />
    // ));
    //console.log(this.props.recordlist)
    return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
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
            actions={
              [<IconText type="star-o" text={item.reference_number} />,
              <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />]
            }
            extra={<img width={150} alt="logo" src={"http://localhost:9000/images/"+item.images[0]} />}
          >
            <List.Item.Meta
              avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
              title={<Row>
                      <Col span={6}>{item.username}</Col>
                      <Col span={6}><Tag>Tag 1</Tag></Col>
                    </Row>}
              description={
                <Row>
                  <Col span={6}>Add: {item.address}</Col>
                  <Col span={6}>Tel: {item.phone}</Col>
                  <Col span={6}>{Date(Date.now()).toString()}</Col>
                </Row>
              }
            />


          </List.Item>

        )}
      />
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
