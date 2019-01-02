import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/uielements/form';
import { Upload, Icon, Modal } from 'antd';
import Button from '../../components/uielements/button';


class FormUploadImage extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      //beforeUpload:false
    });
  }

  handleChange = (e) =>{

    var { fileList } = e;
    console.log(e)
    this.setState({ fileList });
    fileList = fileList.map((file) => {
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
          data={{id:this.props.id}}
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

function mapStateToProps(state) {

  return {
    id:state.RecordAdd._id,
  };
}


const WrappedFormUploadImage = Form.create()(FormUploadImage);
export default connect(mapStateToProps,{  } )(WrappedFormUploadImage);
