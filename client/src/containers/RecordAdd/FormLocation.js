import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Radio, { RadioGroup } from '../../components/uielements/radio';
import { Cascader,  Row, Col  } from 'antd';
import actions from '../../redux/recordAdd/actions';

import SuperFetch from '../../helpers/superFetch';


import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';


import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const { updateAddress } = actions;


const FormItem = Form.Item;
const provider = new OpenStreetMapProvider();

class FormLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactOptions: 1,
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


  onChange =(value, selectedOptions) => {
    //console.log(value, selectedOptions);
    this.setState({
      city: value,
    },() => {
      //console.log(this.state.city[2] + ' ' +this.state.city[1]);
      provider.search({ query: this.state.city[2] + ' ' +this.state.city[1]})
        .then(res => {
          if(res.length>0) {
            this.setState({
                mapCenter:[res[0].y,res[0].x],
            });
          }
        });
      });

  }

  onChangeRadio =  (value, selectedOptions) => {
    //console.log(value.target.value)
    this.setState({
      contactOptions: value.target.value,
    },() => {});
  }

  filter = (inputValue, path) => {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
  }

  onVerify =  () => {

    provider.search({ query: this.state.locationQuery+' ' +this.state.city[2] + ' ' +this.state.city[1]})
    .then(res => {
      console.log( this.state.locationQuery+' ' +this.state.city[2] + ' ' +this.state.city[1])
      console.log(res)
      if(res.length>0) {
        this.setState({
            markers:[[res[0].y,res[0].x]],
            mapCenter:[res[0].y,res[0].x],
        });
      }
    });

  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };

    return (
      <Form>
        <FormItem label='Choose your City'>
        <Cascader
        options={this.state.cityOptions}
        onChange={this.onChange}
        placeholder="Please select"
        showSearch={ this.filter }
        />
        </FormItem>

        <FormItem label='Choose one of following'>
          <Row>
            <Col span={6}>
              <RadioGroup value={this.state.contactOptions} onChange={this.onChangeRadio}>
                <Radio value={1} style={radioStyle}>Address
                </Radio>
                <Radio value={2} style={radioStyle}>
                  Click the map to choose the location
                </Radio>
              </RadioGroup>
            </Col>
            <Col span={12}>
              {this.state.contactOptions === 2 ? (
                <Input placeholder="zip code" style={{width: 100, marginLeft: 10,marginRight: 10}}/>
              ) : null}
              {this.state.contactOptions === 1 ? (
                <div>
                  <Row>
                    <Col span={24}>
                    <Input
                      onChange={event => this.setState({ locationQuery: event.target.value })}
                      placeholder="Enter your address or area or zipcode"
                    />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                    <h4>If it didn't find any record, try to replace apt/unit to #</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                    <h4>   {this.state.city[2]} {this.state.city[1]}</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={2}>
                    <Button type="primary" htmlType="submit" onClick={this.onVerify}>
                      Verify
                    </Button>
                    </Col>
                  </Row>
                </div>
              ) : null}
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
          {this.state.locationQuery}
        </FormItem>
        <FormItem>
            <Map style={{ height: '400px', width: '100%' }}
              center={this.state.mapCenter}
              zoom={13}
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
  //console.log(state.RecordAdd)
  return {
    cityOptions:state.RecordAdd.cityOptions,
  };
}

export default connect(mapStateToProps,{ updateAddress } )(FormLocation);

//
// const WrappedFormLocation = Form.create()(FormLocation);
// export default WrappedFormLocation;
