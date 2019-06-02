import firebase from 'firebase/app';
import 'firebase/auth';

import $ from 'jquery';


import addToWatchlist from './addToWatchlistData';


const addWatchlistMovie = (e) => {
  const button = e.target;
  // const selectedMovieTitle = $(button).parent().parent().find('h2')[0].textContent;
  // console.error('thisisthe movie tite', selectedMovieTitle);
  // const selectedMovieMPAA = $(button).parent().parent().find('h5')[0].classList[0];
  // const selectedMovieUrl = $(button).parent().parent().find('img')[0].src;
  const selectedMovieId = e.target.parentNode.parentNode.id;
  // console.error(selectedMovie);
  if (selectedMovieId === firebase.auth().currentUser.uid) {
    alert('You have already added this movie to your watchlist silly!');
  } else {
    const user = firebase.auth().currentUser.uid;
    const newMovie = {
      "isWatched": 'false',
      "movieId": selectedMovieId,
      "rating": 5,
      "uid": user,
    };
    addToWatchlist.addNewWatchlist(newMovie)
      .then(() => {
      console.error(newMovie, 'you did it!');
      })
      .catch(err => console.error(err, 'no new movie for you'));
  }
};

const createWatchlistEventListener = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('watchlistButton')) {
      addWatchlistMovie(e);
    }
  });
};

export default { createWatchlistEventListener };
