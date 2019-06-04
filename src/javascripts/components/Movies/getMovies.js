import firebase from 'firebase/app';
import 'firebase/auth';

import axios from 'axios';

import apiKeys from '../../helpers/data/apiKeys.json';
import myWatchlistData from '../myWatchlist/myWatchlistData';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

// this is the original movie array
// const getMovies = () => new Promise((resolve, reject) => {
//   axios.get(`${firebaseUrl}/movies.json`)
//     .then((resp) => {
//       const movieResults = resp.data;
//       const movies = [];
//       Object.keys(movieResults).forEach((movieId) => {
//         movieResults[movieId].id = movieId;
//         movies.push(movieResults[movieId]);
//       });
//       resolve(movies);
//     })
//     .catch(err => reject(err));
// });

// this is the new movie builder that will blend with user movies
const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((resp) => {
      const movieResults = resp.data;
      const movies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        movies.push(movieResults[movieId]);
      });
      myWatchlistData.getWatchlist(firebase.auth().currentUser.uid)
        .then((watchlistMovies) => {
          const finalMovies = [];
          movies.forEach((movie) => {
            if (watchlistMovies.find(userMovie => userMovie.movieId === movie.id)) {
              const currentMovie = watchlistMovies.find(userMovie => userMovie.movieId === movie.id);
              const updatedMovie = movie;
              updatedMovie.uid = currentMovie.id;
              finalMovies.push(updatedMovie);
            } else {
              finalMovies.push(movie);
            }
          });
          console.error('look at this USER MOVIES', finalMovies);
          resolve(finalMovies);
          // console.error('this is watchlist', watchlistMovies);
          // console.error('this is movies', movies);
        })
        .catch(err => console.error(err));
    })
    .catch(err => reject(err));
});

export default { getMovies };
