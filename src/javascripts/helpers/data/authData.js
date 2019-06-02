import fb from 'firebase/app';
import 'firebase/auth';

import movies from '../../components/Movies/movies';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('movies');
const birfdayNavbar = document.getElementById('navbar-button-movies');
const addMovieNavbar = document.getElementById('navbar-button-addMovies');
const authNavbar = document.getElementById('navbar-button-auth');
const myWatchlist = document.getElementById('navbar-button-watchlist');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  fb.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
      birfdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      addMovieNavbar.classList.remove('hide');
      myWatchlist.classList.remove('hide');
      logoutNavbar.classList.remove('hide');
      movies.movieBuilder();
    } else {
      console.error('nope');
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      myWatchlist.classList.add('hide');
      logoutNavbar.classList.add('hide');
      addMovieNavbar.classList.remove('hide');
    }
  });
};

export default { checkLoginStatus };
