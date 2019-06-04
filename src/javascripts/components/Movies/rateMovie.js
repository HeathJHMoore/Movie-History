import axios from 'axios';

import $ from 'jquery';

import apiKeys from '../../helpers/data/apiKeys.json';
import movies from './movies';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const changeMovieRating = (userMovieId, newRating) => axios.patch(`${firebaseUrl}/userMovie/${userMovieId}.json`, { rating: newRating });

let movieBeingRated = '';

const movieToBeRated = (e) => {
  console.error('you are starting to rate a movie wow');
  const selectedMovieId = e.target.parentNode.parentNode.id;
  movieBeingRated = selectedMovieId;
};

const movieBeingRatedSetter = () => {
  const movie = movieBeingRated;
  return movie;
};

const rateButtonUpdate = () => {
  console.error('wow you submitted a rating!!!!');
  const currentMovie = movieBeingRatedSetter();
  if (movies.setMovies().indexOf(currentMovie) !== -1) {
    const rating = document.getElementById('movieRating').value;
    changeMovieRating(currentMovie, rating);
  }
};

const rateButtonEvent = () => {
  // $('#confirmRatingButton').on('click', rateButtonUpdate);
  $('body').on('click', '#confirmRatingButton', rateButtonUpdate);
};

const rateMovieEvent = () => {
  $('body').on('click', '.rateButton', movieToBeRated);
};

export default { rateButtonEvent, rateMovieEvent };
