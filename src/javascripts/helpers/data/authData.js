import fb from 'firebase/app';
import 'firebase/auth';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('movies');
const birfdayNavbar = document.getElementById('navbar-button-birfday');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  fb.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
      birfdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
    } else {
      console.error('nope');
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
