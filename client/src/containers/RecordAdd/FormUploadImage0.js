import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/uielements/form';
import { Upload, Icon, Modal, message } from 'antd';
import Button from '../../components/uielements/button';
import actions from '../../redux/recordAdd/actions';
import reqwest from 'reqwest';


const { addressImageSuccess } = actions;


class FormUploadImage extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    uploading: false,
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      beforeUpload:false
    });
  }

  handleChange = (e) =>{

    var { fileList } = e;
    //console.log(e)
    this.setState({ fileList });
    fileList = fileList.map((file) => {
      return file;
    });

  }

  click= () =>{
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: '//jsonplaceholder.typicode.com/posts/',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  }

  beforeUpload = (e) =>{
    console.log(e);
    return false;

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
          //onChange={this.handleChange}
          multiple = {true}
          accept="image/*,audio/*"
          data={{id:this.props.id}}
          beforeUpload={this.beforeUpload}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>

          <Button type="primary" htmlType="submit"
          disabled = {(this.state.fileList.length>0)?false:true}
          onClick = {this.click}
          >
            Save
          </Button>
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
export default connect(mapStateToProps,{addressImageSuccess} )(WrappedFormUploadImage);
