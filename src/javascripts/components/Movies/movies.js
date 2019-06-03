import getMovies from './getMovies';
import util from '../../helpers/util';

// const movieBuilder = () => {
//   getMovies.getMovies()
//     .then((moviesArray) => {
//       console.error('this is the moview Array', moviesArray);
//       let domString = '';
//       moviesArray.forEach((movie) => {
//         domString += `<div ${movie.uid === undefined ? `id=${movie.id}` : `id=${movie.uid}`} class="card movieCards p-0 mb-3 col-12 col-sm-6 col-lg-4 text-center" style="border: solid 1px black">`;
//         domString += `<h2 id="${movie.id}">${movie.title}</h2>`;
//         domString += `<h5 class="${movie.mpaaRating}">Rating: ${movie.mpaaRating}</h5>`;
//         domString += `<img src="${movie.imageURL}" height="300px">`;
//         domString += '<div>';
//         domString += '<button class="btn btn-primary w-100 watchlistButton" style="border-radius: 0px;">Add to Watchlist</button>';
//         domString += '<button class="btn btn-secondary w-100" style="border-radius: 0px;">Rate this Movie</button>';
//         domString += '</div>';
//         domString += '</div>';
//         util.printToDom('movies', domString);
//       });
//     })
//     .catch();
// };
let userMoviesArray = [];

const setMovies = () => {
  const exportedArray = [...userMoviesArray];
  return exportedArray;
};

const movieBuilder = () => {
  getMovies.getMovies()
    .then((moviesArray) => {
      userMoviesArray = [];
      moviesArray.forEach((mov) => {
        if (mov.uid !== undefined) {
          userMoviesArray.push(mov.uid);
        }
      });
      console.error('PLEASE LOOK AT THIS NOW', userMoviesArray);
      console.error('this is the moview Array', moviesArray);
      let domString = '';
      moviesArray.forEach((movie) => {
        domString += `<div ${movie.uid === undefined ? `id=${movie.id}` : `id=${movie.uid}`} class="card movieCards p-0 mb-3 col-12 col-sm-6 col-lg-4 text-center" style="border: solid 1px black">`;
        domString += `<h2 id="${movie.id}">${movie.title}</h2>`;
        domString += `<h5 class="${movie.mpaaRating}">Rating: ${movie.mpaaRating}</h5>`;
        domString += `<img src="${movie.imageURL}" height="300px">`;
        domString += '<div>';
        domString += '<button class="btn btn-primary w-100 watchlistButton" style="border-radius: 0px;">Add to Watchlist</button>';
        domString += '<button class="btn btn-secondary w-100" style="border-radius: 0px;">Rate this Movie</button>';
        domString += '</div>';
        domString += '</div>';
        util.printToDom('movies', domString);
      });
    })
    .catch();
};

const allMoviesEvent = () => {
  document.getElementById('navbar-button-movies').addEventListener('click', movieBuilder);
};

export default { movieBuilder, allMoviesEvent, setMovies };
