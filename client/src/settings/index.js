export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'ISOMORPHIC',
  siteIcon: 'ion-flash',
  footerText: 'Isomorphic ©2018 Created by RedQ, Inc',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';

const jwtConfig = {
  fetchUrl: '/api/',
  secretKey: 'secretKey',
};

const AlgoliaSearchConfig = {
  appId: '',
  apiKey: ''
};

const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: []
};

export { siteConfig, language, themeConfig, jwtConfig, AlgoliaSearchConfig, mapboxConfig};
