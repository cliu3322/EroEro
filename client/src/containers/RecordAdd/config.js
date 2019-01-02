const config = {
  id:'photo',
  target: '#uppyHolder',
  endpoint: '/api/image',
  DashboardInline: true,

  autoProceed: false,
  restrictions: {
    maxFileSize: 10000000,
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
