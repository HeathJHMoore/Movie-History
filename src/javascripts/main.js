import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';
import auth from './components/Auth/auth';
import login from './helpers/data/authData';
import logout from './components/Auth/signOut';
import movies from './components/Movies/movies';
import addMovie from './components/Movies/createNewMovie';
import watchlist from './components/myWatchlist/myWatchlist';
import createWatchList from './components/myWatchlist/addToWatchlist';
import rateMovie from './components/Movies/rateMovie';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  console.error('yo yo');
  firebase.initializeApp(apiKeys.firebaseConfig);
  login.checkLoginStatus();
  auth.authStringBuilder();
  logout.logoutButton();
  // movies.movieBuilder();
  addMovie.createMovieEventListener();
  watchlist.watchlistEvent();
  movies.allMoviesEvent();
  createWatchList.createWatchlistEventListener();
  watchlist.removeWatchMovieEvent();
  rateMovie.rateButtonEvent();
  rateMovie.rateMovieEvent();
};

init();
