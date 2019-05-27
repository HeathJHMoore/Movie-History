import fb from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';

const signMeIn = () => {
  const provider = new fb.auth.GoogleAuthProvider();
  fb.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '';
  domString += '<button id="google-auth" class="btn btn-primary"> Login with Google </button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
