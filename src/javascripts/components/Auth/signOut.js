import fb from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  // const provider = new fb.auth.GoogleAuthProvider();
  fb.auth().signOut();
  console.error('you tried to logoout');
};

const logoutButton = () => {
  document.getElementById('navbar-button-logout').addEventListener('click', signOut);
};

export default { logoutButton };
