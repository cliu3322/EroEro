import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Collapses from '../../../components/uielements/collapse';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper.js';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../settings/basicStyle';
import IntlMessages from '../../../components/utility/intlMessages';
import CollapseWrapper from './collapse.style';


const Panel = Collapses.Panel;
const Collapse = props => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);

export default class extends Component {
  renderGeos(colStyle) {
    var country = [{name:"asdff",states:[{statename:"state1", cities:["asdf","adsffd"]},{statename:"state2",cities:["asdf","adsffd"]}]},
    {name:"sdfffff",states:[{statename:"state3",cities:["asdf","adsffd"]},{statename:"state4",cities:["asdf","adsffd"]}]}];
    return country.map((country,i) => {
      return(
        <Col md={12} sm={12} xs={24} style={colStyle} key={i}>
          <Box
            title={country.name}
            subtitle={
              <IntlMessages id="uiElements.collapse.nestedExampleSubTitle" />
            }
          >
            <ContentHolder>
            {country.states.map((state,j) =>(
              <Collapse key={j}>
                <Panel header={state.statename}>
                  {state.cities.map((city,k) =>(
                    <a href={city} key={k}>{city} </a>
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
