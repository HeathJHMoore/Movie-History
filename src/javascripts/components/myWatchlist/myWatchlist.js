import firebase from 'firebase/app';
import 'firebase/auth';
import watchlist from './myWatchlistData';
import movies from '../Movies/getMovies';
import util from '../../helpers/util';

const watchlistMovieBuilder = (arrayOfMovies) => {
  let domString = '';
  arrayOfMovies.forEach((movie) => {
    domString += '<div class="card movieCards p-0 mb-3 col-12 col-sm-6 col-lg-4 text-center" style="border: solid 1px black">';
    domString += `<h2>${movie.title}</h2>`;
    domString += `<img src="${movie.imageURL}" height="300px">`;
    domString += '<div>';
    domString += '<button class="btn btn-danger w-100" style="border-radius: 0px;">Remove from Watchlist</button>';
    domString += '<button class="btn btn-secondary w-100" style="border-radius: 0px;">Rate this Movie</button>';
    domString += '</div>';
    domString += '</div>';
    util.printToDom('movies', domString);
  })
};

const myWatchlistBuilder = () => {
  watchlist.getWatchlist(firebase.auth().currentUser.uid)
    .then((userWatchList) => {
      console.error(userWatchList);
      const movieList = userWatchList.map(movie => movie.movieId);
      console.error(movieList);
      movies.getMovies()
        .then((allMovies) => {
          const watchlistMovies = allMovies.filter(allMovie => movieList.indexOf(allMovie.id) !== -1);
          watchlistMovieBuilder(watchlistMovies);
        })
        .catch();
    })
    .catch((console.error('its messed up')));
};

const watchlistEvent = () => {
  document.getElementById('navbar-button-watchlist').addEventListener('click', myWatchlistBuilder);
};

export default { watchlistEvent };
