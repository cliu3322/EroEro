import Uppy from 'uppy/lib/core';
import Dashboard from 'uppy/lib/plugins/Dashboard';
import MetaData from 'uppy/lib/plugins/MetaData';
const XHRUpload = require('@uppy/xhr-upload')




export default function uppyInit(options,id, onSuccess) {
  const uppy = Uppy({
    id:'what',
    debug: true,
    autoProceed: options.autoProceed,
    restrictions: options.restrictions || '',
    meta: {
    }
  });
  //uppy.use(Tus10, { endpoint: options.endpoint, resume: true });
  uppy.use(XHRUpload, {
    endpoint: options.endpoint,
    method: 'post',
    formData: true,
    fieldName: 'my_file',
    showProgressDetails: true,
    hideUploadButton: false,
    bundle: true,
  })
  uppy.use(Dashboard, {
    trigger: options.trigger,
    inline: options.DashboardInline,
    target: options.target,
    showProgressDetails: true,
    hideUploadButton: false,
    note: options.restrictions || 'Images and video only, 300kb or less'
  });


  uppy.use(MetaData, {
    fields: options.metaFields || []
  });
  // uppy.on('core:success', fileList => {
  //   onSuccess(fileList);
  //   console.log(fileList);
  // });

  uppy.on('core:file-added', (file) => {
    //file.name = 'aaaaaaa.JPG'
    //console.log(file)
    //console.log(uppy);
    uppy.updateMeta({ name:id+'.'+file.id +'.'+file.extension},file.id)
    //core.setFileMeta(file.id, { name: '1500' });

  })

  uppy.on('core:upload', (file) => {
    console.log(file);
    //core.setFileMeta(file.id, { name: '1500' });

  })
  uppy.run();
}
