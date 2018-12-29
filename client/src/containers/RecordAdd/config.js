const config = {
  id:'photo',
  target: '#uppyHolder',
  endpoint: 'fakeServer',
  DashboardInline: true,
  Webcam: false,
  GoogleDrive: false,
  Dropbox: false,
  Instagram: false,
  autoProceed: false,
  restrictions: {
    maxFileSize: 1000000,
    maxNumberOfFiles: 10,
    minNumberOfFiles: 1,
    allowedFileTypes: ['image/*', 'video/*']
  },
  metaFields: [
    {
      id: 'resizeTo',
      name: 'Resize to',
      value: 1200,
      placeholder: 'specify future image size'
    },
    {
      id: 'description',
      name: 'Description',
      value: 'none',
      placeholder: 'describe what the file is for'
    }
  ]
};
export default config;
