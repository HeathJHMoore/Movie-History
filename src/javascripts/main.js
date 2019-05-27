import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';
import auth from './components/Auth/auth';
import login from './helpers/data/authData';
import logout from './components/Auth/signOut';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  console.error('yo yo');
  firebase.initializeApp(apiKeys.firebaseConfig);
  login.checkLoginStatus();
  auth.authStringBuilder();
  logout.logoutButton();
};

init();
