import React, { Component } from 'react';
import Input from '../../components/uielements/input';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Radio, { RadioGroup } from '../../components/uielements/radio';
import Select, { SelectOption } from '../../components/uielements/select';
import ContentHolder from '../../components/utility/contentHolder';

const FormItem = Form.Item;
const Option = SelectOption;


class FormLocation extends Component {
  state = {
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };

    return (
      <Form>
        <FormItem label='Choose your City'>
            <Select
              defaultValue="US"
              onChange={this.handleChange}
              style={{ width: '120px' }}
            >
              <Option value="US">US</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select
              defaultValue="CA"
              onChange={this.handleChange}
              style={{ width: '120px' }}
            >
              <Option value="CA">CA</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select
              defaultValue="LA"
              onChange={this.handleChange}
              style={{ width: '120px' }}
            >
              <Option value="LA">LA</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </FormItem>
        <FormItem label='Choose one of following'>
          <RadioGroup value={this.state.value}  onChange={this.onChange}>
            <ContentHolder>
              <Radio value={1} style={radioStyle}>Exact Address
              {this.state.value === 1 ? (
                <Input
                  style={{
                    width: 300,
                    marginLeft: 10,
                    marginRight: 10
                  }}
                />
              ) : null}
              {this.state.value === 1 ? (
                <Button type="primary" htmlType="submit">
                  Verify
                </Button>
              ) : null}
              </Radio>
            </ContentHolder>
            <ContentHolder>
              <Radio value={2} style={radioStyle}>
                ZIP Code
                {this.state.value === 2 ? (
                  <Input placeholder="zip code" style={{width: 100, marginLeft: 10,marginRight: 10}}/>
                ) : null}
              </Radio>
            </ContentHolder>
            <ContentHolder>
              <Radio value={3} style={radioStyle}>
                Area
                {this.state.value === 3 ? (
                  <Input placeholder="Area Name" style={{width: 100, marginLeft: 10,marginRight: 10}}/>
                ) : null}
              </Radio>
            </ContentHolder>
            <ContentHolder>
              <Radio value={4} style={radioStyle}>
                Drop or search on the map
                {this.state.value === 4 ? (
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
      </Form>
    );
  }
}

const WrappedFormLocation = Form.create()(FormLocation);
export default WrappedFormLocation;
