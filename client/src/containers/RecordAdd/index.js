import React, { Component } from 'react';
import { connect } from "react-redux";
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


class RecordAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab_id: this.props.tab_id,
    };
    //console.log(this.state.contactOptions)
  }

  click =  (e) => {
    console.log(e)
    //console.log(value.target.value)
    this.setState({
      tab_id:e.toString()
    },() => {});
  }


  render() {

    return (
      <LayoutWrapper>
        <PageHeader>{<IntlMessages id="addRecord.enterInfo" />}</PageHeader>
        <Tabs activeKey={this.state.tab_id} onTabClick = {this.click}>
          <TabPane tab="Basic Info" key="1" >
            <Box>
              <FormBasic handler = {this.click} />
            </Box>
          </TabPane>
          <TabPane tab="Location" key="2" disabled={!this.props.basicTab}>
            <Box>
              <FormLocation />
            </Box>
          </TabPane>
          <TabPane tab="Pictures" key="3" >
            <Box>
              <FormUploadImage />
            </Box>
          </TabPane>
          <TabPane tab="Description(optional)" key="4">
              <Box>
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


function mapStateToProps(state) {
  return {
    basicTab:state.RecordAdd._id?true:false,
    tab_id:state.RecordAdd.tab_id.toString()
  };
}

export default connect(mapStateToProps, {})(RecordAdd);
