import Auth from './auth/reducer';
import App from './app/reducer';
import Ecommerce from './ecommerce/reducer';
import Cards from './card/reducer';
import RecordAdd from './recordAdd/reducer';
import RecordList from './recordlist/reducer';

import auth from './chatRoom/reducer/auth';
import friends from './chatRoom/reducer/friends';
import user from './chatRoom/reducer/user';

import conversations from './chatRoom/reducer/conversations';
import messages from './chatRoom/reducer/messages';
import error from './chatRoom/reducer/error';


export default {
  Auth,
  App,
  Ecommerce,
  Cards,
  RecordAdd,
  RecordList,
  auth,
  friends,
  user,

  conversations,
  messages,
  error,
};
