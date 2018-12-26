import React, { Component } from 'react';
import Input from '../../components/uielements/input';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Radio, { RadioGroup } from '../../components/uielements/radio';
import ContentHolder from '../../components/utility/contentHolder';
import { Cascader } from 'antd';
import Async from "../../helpers/asyncComponent";
//import BasicMarker from "./maps/basicMarker";



const LeafletMapWithMarkerCluster = props => (
  <Async
    load={import(/* webpackChunkName: "LeafletMapWithMarkerCluster" */ "./maps/mapWithMarkerCluster.js")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);

const FormItem = Form.Item;

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }, {
      value: 'xiasha',
      label: 'Xia Sha',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua men',
    }],
  }],
}];

class FormLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactOptions: 1,
    };
  }

  onChange =  (value, selectedOptions) => {
    this.setState({
      //contactOptions: value.target.value,
    },() => {});
  }

  filter = (inputValue, path) => {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
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
        options={options}
        onChange={this.onChange}
        placeholder="Please select"
        showSearch={ this.filter }
        />
        </FormItem>
        <FormItem label='Choose one of following'>
          <RadioGroup value={this.state.contactOptions} onChange={this.onChange}>
            <ContentHolder>
              <Radio value={1} style={radioStyle}>Exact Address
              {this.state.contactOptions === 1 ? (
                <Input
                  style={{
                    width: 300,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                />
              ) : null}
              {this.state.contactOptions === 1 ? (
                <Button type="primary" htmlType="submit">
                  Verify
                </Button>
              ) : null}
              </Radio>
            </ContentHolder>
            <ContentHolder>
              <Radio value={2} style={radioStyle}>
                ZIP Code
                {this.state.contactOptions === 2 ? (
                  <Input placeholder="zip code" style={{width: 100, marginLeft: 10,marginRight: 10}}/>
                ) : null}
              </Radio>
            </ContentHolder>
            <ContentHolder>
              <Radio value={3} style={radioStyle}>
                Area
                {this.state.contactOptions === 3 ? (
                  <Input placeholder="Area Name" style={{width: 100, marginLeft: 10,marginRight: 10}}/>
                ) : null}
              </Radio>
            </ContentHolder>
            <ContentHolder>
              <Radio value={4} style={radioStyle}>
                Drop or search on the map
                {this.state.contactOptions === 4 ? (
                  <Input placeholder="Area Name" style={{width: 100, marginLeft: 10,marginRight: 10}}/>
                ) : null}
              </Radio>
            </ContentHolder>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </FormItem>
        <FormItem>
          <ContentHolder>
          <LeafletMapWithMarkerCluster/>
          </ContentHolder>
        </FormItem>
      </Form>

    );
  }
}

const WrappedFormLocation = Form.create()(FormLocation);
export default WrappedFormLocation;
