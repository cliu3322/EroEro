import React, { Component } from 'react';

import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import FormUploadImage from './FormUploadImage';
import FormDescription from './FormDescription';
import FormReview from './FormReview';
import FormBasic from './FormBasic';
import FormLocation from './FormLocation';


import IntlMessages from '../../components/utility/intlMessages'


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      loading: false,
      iconLoading: false,
      value: 1,
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {


    return (
      <LayoutWrapper>
        <PageHeader>{<IntlMessages id="addRecord.enterInfo" />}</PageHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic Info" key="1">
            <Box title='Basic Info'>
              <FormBasic />
            </Box>
          </TabPane>
          <TabPane tab="Location" key="2">
            <Box title='Location'>
              <FormLocation />
            </Box>
          </TabPane>
          <TabPane tab="Pictures" key="3">
                <Box>
                  <FormUploadImage />
                </Box>
          </TabPane>
          <TabPane tab="Description(optional)" key="4">
              <Box title='Description'>
                <ContentHolder>
                  <Box>
                    <FormDescription />
                  </Box>
                </ContentHolder>
              </Box>
          </TabPane>
          <TabPane tab="Review and Complete" key="5">
              <Box title='Review your post'>
                <ContentHolder>
                  <Box>
                    <FormReview />
                  </Box>
                </ContentHolder>
              </Box>
          </TabPane>
        </Tabs>

      </LayoutWrapper>
    );
  }
}
