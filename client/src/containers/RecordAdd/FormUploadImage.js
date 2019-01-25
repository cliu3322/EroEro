import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/uielements/form';
import { Upload, Icon, Modal, message } from 'antd';
import Button from '../../components/uielements/button';
import actions from '../../redux/recordAdd/actions';
import reqwest from 'reqwest';
import './FormUploadImage.css';


const { addressImageSuccess } = actions;


class FormUploadImage extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    uploading: false,
  };

  handleCancel = () => this.setState({ previewVisible: false })



  click= () =>{
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    console.log(this.props.id)
    formData.append('id', this.props.id);

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: '/api/image',
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



  render() {
    const { previewVisible, previewImage } = this.state;

    const { uploading, fileList } = this.state;

    const props1 = {
      beforeUpload: (file) => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      onRemove: (file) => {
        console.log(file);
      },
      listType:"picture-card",
      multiple: true,
      onPreview:(file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
          beforeUpload:false
        });
      },

    };
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload {...props1}>
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
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
