import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Form from '../../components/uielements/form';
import Collapses from '../../components/uielements/collapse';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../settings/basicStyle';
import CollapseWrapper from './collapse.style';
import CollapseWrapper0 from './collapse0.style';
import { Link } from 'react-router-dom';
import citiesActions from '../../redux/cities/actions';


import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';


import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


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
        videoURL: 'https://storage.googleapis.com/coverr-main/mp4/Bokeh-Go-Around.mp4',
        openKeys: [],
    }
  }

  componentDidMount() {
    const { initCities } = this.props;
    initCities();
  }

  renderGeos(colStyle) {
    if(this.props.cityOptions){
    return this.props.cityOptions.map((country,i) => {
      return(
        <Col md={6} sm={12} xs={24} style={colStyle} key={i}>
          <Box
            title={country.label}
          >
            <ContentHolder>
            {country.children.map((state,j) =>{
              return (
              <Collapse key={j}>
                <Panel header={state.label}>
                  {state.children.map((city,k) =>(
                    <div key={k}>
                      <Link to={'/guest/recordList/'+city.value} >
                        <p key={k}>{city.label} </p>
                      </Link>
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
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (


        <Row style={rowStyle} gutter={gutter} justify="start">

          {this.renderGeos(colStyle)}

          <Col md={18} sm={12} xs={24}>
            <Map style={{ height: '100vh' }}
              center={[37.0902, -110.7129]}
              zoom={3}
              >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
            </Map>
          </Col>
        </Row>

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
