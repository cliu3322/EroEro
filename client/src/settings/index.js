export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'Eroero',
  siteIcon: 'ion-flash',
  footerText: ' ©2018 Created by Kaman',
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

const jwtConfigChat = {
  fetchUrl: 'http://localhost:8888/',
  secretKey: 'secretKey',
};

const AlgoliaSearchConfig = {
  appId: '',
  apiKey: ''
};
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};


export {
  siteConfig,
  language,
  themeConfig,
  jwtConfig,
  jwtConfigChat,
  AlgoliaSearchConfig,
  firebaseConfig
};
