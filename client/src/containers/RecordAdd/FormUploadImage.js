import React, { Component } from 'react';
import Form from '../../components/uielements/form';
import { Upload, Icon, Modal } from 'antd';
import Button from '../../components/uielements/button';
import Uppy from "../../components/uielements/uppy";
import config from "./config";
import UppyStyleWrapper from "./uppy.style";
const FormItem = Form.Item;

class FormUploadImage extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    file.originalname = 'xxxxxx';
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) =>{
    this.setState({ fileList });
    fileList = fileList.map((file) => {
      console.log(file)

        // Component will show file.url as link
        file.originalname = 'xxxxxx';

      return file;
    });

  }


  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/api/image"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          multiple = {true}
          accept="image/*,audio/*"
          data={(file) => console.log(file)}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );

  }
}

const WrappedFormUploadImage = Form.create()(FormUploadImage);
export default WrappedFormUploadImage;
