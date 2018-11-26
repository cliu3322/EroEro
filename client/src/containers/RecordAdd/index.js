import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Input from '../../components/uielements/input';
import Async from '../../helpers/asyncComponent';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';

import Uppy from '../../components/uielements/uppy';
import config from "./uppy.config";
import UppyStyleWrapper from "./uppy.style";
import IntlMessages from '../../components/utility/intlMessages';
const Editor = props => (
  <Async
    load={import(/* webpackChunkName: "forms-editor" */ '../../components/uielements/editor.js')}
    componentProps={props}
  />
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      loading: false,
      iconLoading: false
    };
  }
  componentDidMount() {
    Uppy(config);
  }
  render() {
    const rowStyle = {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap'
    };
    const colStyle = {
      marginBottom: '16px'
    };
    const gutter = 16;
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
      <LayoutWrapper>
        <PageHeader>{<IntlMessages id="addRecord.enterInfo" />}</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="addRecord.name" />}
              subtitle={<IntlMessages id="forms.input.basicSubTitle" />}
            >
              <ContentHolder>
                <Input placeholder="Basic usage" />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="forms.input.variationsTitle" />}
              subtitle={<IntlMessages id="forms.input.variationsSubtitle" />}
            >
              <ContentHolder>
                <Input
                  placeholder="exact location"
                  style={{ marginBottom: '15px' }}
                />
                <Input
                  placeholder="zipcode"
                  style={{ marginBottom: '15px' }}
                />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box>
              <ContentHolder>
                <UppyStyleWrapper id="uppyHolder" />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box>
              <ContentHolder>
                <Editor {...editorOption} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
