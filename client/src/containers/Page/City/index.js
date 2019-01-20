import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Form from '../../../components/uielements/form';
import Collapses from '../../../components/uielements/collapse';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../settings/basicStyle';
import IntlMessages from '../../../components/utility/intlMessages';
import CollapseWrapper from './collapse.style';
import CollapseWrapper0 from './collapse0.style';

import citiesActions from '../../../redux/cities/actions';


import SideBar from '../../SidebarGuest/Sidebar';


const Panel = Collapses.Panel;

const Collapse = props => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);

class CityOptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
        videoURL: 'https://storage.googleapis.com/coverr-main/mp4/Bokeh-Go-Around.mp4'
    }
  }

  componentDidMount() {

    const { initCities } = this.props;
    initCities();

  }

  renderGeos(colStyle) {
    //console.log(this.props.cityOptions)
    if(this.props.cityOptions){
    return this.props.cityOptions.map((country,i) => {
      country.children.sort((a,b) =>{return a.label.localeCompare(b.label)})
      return(
        <Col md={6} sm={12} xs={24} style={colStyle} key={i}>
          <Box
            title={country.label}
          >
            <ContentHolder>
            {country.children.map((state,j) =>{
              state.children.sort((a,b) =>{return a.label.localeCompare(b.label)})
              return (
              <Collapse key={j}>
                <Panel header={state.label}>
                  {state.children.map((city,k) =>(
                    <div key={k}>
                      <a href={'/guest/recordList/'+city.value} key={k}>{city.label} </a>
                      <br/>
                    </div>
                  ))}
                </Panel>
              </Collapse>
            )})}
            </ContentHolder>

          </Box>
        </Col>
      );
      })
    }
  }
  callback = key => {};
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <CollapseWrapper0>
        <video id="background-video" loop autoPlay>
           <source src={this.state.videoURL} type="video/mp4" />
           <source src={this.state.videoURL} type="video/ogg" />
           Your browser does not support the video tag.
       </video>

        <PageHeader>
          {<IntlMessages id="uiElements.collapse.ChooseYourCity" />}
        </PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">

          {this.renderGeos(colStyle)}
        </Row>
      </CollapseWrapper0>
    );
  }
}



function mapStateToProps(state) {
  //console.log(state);
  return {
    cityOptions:state.Cities.cities,
  };
}

const WrappedCityOptions = Form.create()(CityOptions);

export default connect(mapStateToProps, citiesActions )(WrappedCityOptions);