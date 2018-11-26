import React, { Component } from 'react';
import moment from 'moment';
import { Icon } from 'antd';
import { SingleCardWrapper } from './shuffle.style';
import { Col, Row } from 'antd';
import Tags from '../../components/uielements/tag';
import TagWrapper from './tag.style';

const Tag = props => (
  <TagWrapper>
    <Tags {...props}>{props.children}</Tags>
  </TagWrapper>
);

export default class extends Component {
  render() {
    const rowStyle = {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap'
    };
    const gutter = 16;

    const listClass = `isoSingleCard card ${this.props.view}`;
    const style = { zIndex: 100 - this.props.index };

    return (
      <SingleCardWrapper id={this.props.id} className={listClass} style={style}>
        <div className="isoCardImage">
          <img alt="#" src={process.env.PUBLIC_URL + this.props.img} />
        </div>
        <div className="isoCardContent">
          <h3 className="isoCardTitle">{this.props.name}</h3>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col>
              <span className="isoCardDate">
                {this.props.location}
              </span>
            </Col>
            <Col>
              <span className="isoCardDate">
                {moment(this.props.timestamp).format('MMM Do, YYYY')}
              </span>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
          </Row>
        </div>
        <button className="isoDeleteBtn" onClick={this.props.clickHandler}>
          <Icon type="close" />
        </button>
      </SingleCardWrapper>
    );
  }
}
