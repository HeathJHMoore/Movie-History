import axios from 'axios';

import apiKeys from '../../helpers/data/apiKeys.json';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((resp) => {
      const movieResults = resp.data;
      const movies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        movies.push(movieResults[movieId]);
      });
      resolve(movies);
    })
    .catch(err => reject(err));
});

export default { getMovies };
