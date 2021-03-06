import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Form from '../../../components/uielements/form';
import Collapses from '../../../components/uielements/collapse';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper.js';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../settings/basicStyle';
import IntlMessages from '../../../components/utility/intlMessages';
import CollapseWrapper from './collapse.style';
import SuperFetch from '../../../helpers/superFetch';


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
      locationQuery:'',
      markers:[],
      mapCenter:[51.505, -0.09],
      city:[],
    };
    //this.mountMap = this.mountMap.bind(this);
  }

  componentDidMount() {

    const getCities =  async () => {
         const response =  await SuperFetch.get('getCXGCities').then(res => {return res});
         this.setState({
           cityOptions: response.allcities,
         },() => {});

         return response;
      };
    getCities();
  }

  renderGeos(colStyle) {
    console.log(this.state.cityOptions)
    if(this.state.cityOptions){
    return this.state.cityOptions.map((country,i) => {
      return(
        <Col md={12} sm={12} xs={24} style={colStyle} key={i}>
          <Box
            title={country.label}
            subtitle={
              <IntlMessages id="uiElements.collapse.nestedExampleSubTitle" />
            }
          >
            <ContentHolder>
            {country.children.map((state,j) =>(
              <Collapse key={j}>
                <Panel header={state.label}>
                  {state.children.map((city,k) =>(
                    <a href={'/recordList/'+city.value} key={k}>{city.label} </a>
                  ))}
                </Panel>
              </Collapse>
            ))}
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
      <LayoutWrapper>
        <PageHeader>
          {<IntlMessages id="uiElements.collapse.ChooseYourCity" />}
        </PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">

          {this.renderGeos(colStyle)}
        </Row>
      </LayoutWrapper>
    );
  }
}



function mapStateToProps(state) {

  return {
    cityOptions:state.RecordAdd.cityOptions,
  };
}

const WrappedCityOptions = Form.create()(CityOptions);

export default connect(mapStateToProps,{ } )(WrappedCityOptions);
