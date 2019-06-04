import firebase from 'firebase/app';
import 'firebase/auth';
import watchlist from './myWatchlistData';
import movies from '../Movies/getMovies';
import util from '../../helpers/util';
import removeWatch from './removeFromWatchlist';
import $ from 'jquery';

const watchlistMovieBuilder = (arrayOfMovies) => {
  let domString = '';
  arrayOfMovies.forEach((movie) => {
    domString += `<div id="${movie.userMovieId}"class="card movieCards p-0 mb-3 col-12 col-sm-6 col-lg-4 text-center" style="border: solid 1px black">`;
    domString += `<h2>${movie.title}</h2>`;
    domString += `<img src="${movie.imageURL}" height="300px">`;
    domString += '<div>';
    domString += '<button class="btn btn-danger w-100 removeWatch" style="border-radius: 0px;">Remove from Watchlist</button>';
    domString += '<button class="btn btn-secondary w-100 rateButton" style="border-radius: 0px;" data-toggle="modal" data-target="#ratingModal">Rate this Movie</button>';
    domString += '</div>';
    domString += '</div>';
    util.printToDom('movies', domString);
  })
};

const myWatchlistBuilder = () => {
  watchlist.getWatchlist(firebase.auth().currentUser.uid)
    .then((userWatchList) => {
      const movieList = userWatchList.map(movie => movie.movieId);
      // console.error('movie list here', movieList);
      movies.getMovies()
        .then((allMovies) => {
          const watchlistMovies = allMovies.filter(allMovie => movieList.indexOf(allMovie.id) !== -1);
          const finalArrayOfMovies = [];
          watchlistMovies.forEach((listMovie) => {
            const currentMovie = userWatchList.find((mov) => mov.movieId === listMovie.id)
            const newMovieObject = listMovie;
            newMovieObject.userMovieId = currentMovie.id;
            finalArrayOfMovies.push(newMovieObject);
          })
          watchlistMovieBuilder(finalArrayOfMovies);
        })
        .catch();
    })
    .catch(err => console.error(err));
};

const watchlistEvent = () => {
  document.getElementById('navbar-button-watchlist').addEventListener('click', myWatchlistBuilder);
};

const removeFromWatchlist = (e) => {
  const movieToRemove = e.target.parentNode.parentNode.id;
  removeWatch.deleteWatchlistMovie(movieToRemove)
    .then(() => {
      myWatchlistBuilder();
    })
    .catch(err => console.error(err));
}

const removeWatchMovieEvent = () => {
  $('body').on('click', '.removeWatch', removeFromWatchlist);
}

export default { watchlistEvent, removeWatchMovieEvent };
