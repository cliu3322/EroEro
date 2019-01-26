import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/uielements/button';
import {Form, Cascader, Row, Col, Input  } from 'antd';
import actions from '../../redux/recordAdd/actions';
import citiesActions from '../../redux/cities/actions';

import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';


import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const { updateAddress } = actions;
const { initCities } = citiesActions;

const Search = Input.Search;
const FormItem = Form.Item;
const provider = new OpenStreetMapProvider();

class FormLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationQuery:'',
      markers:[],
      mapCenter:[51.505, -0.09],
      city:[],
      options:[]
    };

  }

  componentDidMount() {

    if (this.props.cities.length===0) {
      this.props.initCities();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var data = this.props.form.getFieldsValue();
        data.id = this.props.id;
        data.markers = this.state.markers;
        this.props.updateAddress(data)
        this.props.handler('3');
      }
    });
  }

  onChange =(value, selectedOptions) => {
    //console.log(value, selectedOptions);
    this.setState({
      city: value,
    },() => {
      //console.log(this.state.city[2] + ' ' +this.state.city[1]);
      provider.search({ query: this.state.city[1]})
        .then(res => {
          if(res.length>0) {
            this.setState({
                mapCenter:[res[0].y,res[0].x],
            });
          }
        });
      });

  }


  filter = (inputValue, path) => {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
  }

  onVerify =  () => {
    var query = this.props.form.getFieldValue('address')
    provider.search({ query: query})
    .then(res => {
      if(res.length>0) {
        this.setState({
            markers:[[res[0].y,res[0].x]],
            mapCenter:[res[0].y,res[0].x],
        });
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (

      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={8}>
          <FormItem label='Choose the City you want to post' >
            {getFieldDecorator('city', {
              rules: [{
                required: true,
                message: 'Please input your city',
              }],
            })(
              <Cascader
              options={this.props.cities}
              onChange={this.onChange}
              placeholder="Please select"
              showSearch={ this.filter }
              />
            )}
          </FormItem>
          </Col>
        </Row>
        <Row>
          <h4>If it didn't find any record, try to replace apt/unit to #</h4>
          <Col span={8}>

            <FormItem label='Your full address or zipcode and confirm with the map'>
              {getFieldDecorator('address', {
                rules: [{
                  required: true,
                  message: 'Please input your address',
                }],
              })(
                <Search placeholder="Enter your address or area or zipcode" enterButton="Search"
                size="large"
                onSearch={this.onVerify}
                />
              )}
            </FormItem>

          </Col>
        </Row>


        <FormItem>
          <Button type="primary" htmlType="submit" disabled = {(this.state.city.length>0 && this.state.markers.length >0)?false:true}>
            Save
          </Button>
          {this.state.locationQuery}
        </FormItem>
        <FormItem>
          <Map style={{ height: '400px', width: '100%' }}
            center={this.state.mapCenter}
            zoom={11}
            >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {this.state.markers.map((position, idx) =>
               <Marker key={`marker-${idx}`} position={position}>
               <Popup>
                 <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
               </Popup>
             </Marker>
             )}
          </Map>
        </FormItem>
      </Form>

    );
  }
}


function mapStateToProps(state) {
  return {
    cities: state.Cities.cities,
    cityOptions:state.RecordAdd.cityOptions,
    id:state.RecordAdd._id,
  };
}

const WrappedFormLocation = Form.create()(FormLocation);

export default connect(mapStateToProps,{ updateAddress, initCities } )(WrappedFormLocation);

//
// const WrappedFormLocation = Form.create()(FormLocation);
// export default WrappedFormLocation;
