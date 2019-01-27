import React, { Component } from 'react';
import { connect } from "react-redux";
import PageHeader from '../../components/utility/pageHeader';
import { Steps, Divider } from 'antd';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import Box from '../../components/utility/box';
import FormBasic from './FormBasic';

import FormUploadImage from './FormUploadImage';
//import FormDescription from './FormDescription';
import FormReview from './FormReview';
import FormLocation from './FormLocation';


import IntlMessages from '../../components/utility/intlMessages'


const Step = Steps.Step;

const steps = [{
  title: 'Basic',
  content: (<FormBasic/>),
}, {
  title: 'Location',
  content: (<FormLocation/>),
}, {
  title: 'Picture',
  content: (<FormUploadImage/>),
}, {
  title: 'Review & Post',
  content:(<FormReview/>),
}];

class RecordAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };

  }


  click =  (e) => {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <LayoutWrapper>
        <PageHeader>{<IntlMessages id="addRecord.enterInfo" />}</PageHeader>

            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>

          <Divider />

            <Box>
              {
                current === 0
                && (<FormBasic handler = {this.click}/>)
              }
              {
                current === 1
                && (<FormLocation handler = {this.click}/>)
              }
              {
                current === 2
                && (<FormUploadImage handler = {this.click}/>)
              }
              {
                current === 3
                && (<FormReview handler = {this.click}/>)
              }
            </Box>


      </LayoutWrapper>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, {})(RecordAdd);
