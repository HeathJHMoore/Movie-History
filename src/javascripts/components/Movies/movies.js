import getMovies from './getMovies';
import util from '../../helpers/util';


const movieBuilder = () => {
  getMovies.getMovies()
    .then((moviesArray) => {
      console.error('this is the moview Array', moviesArray);
      let domString = '';
      moviesArray.forEach((movie) => {
        domString += '<div class="card col-6 col-lg-3 p-0 text-center">';
        domString += `<h2>${movie.title}</h2>`;
        domString += `<img src="${movie.imageURL}" height="300px">`;
        domString += '<div>';
        domString += '<button class="btn btn-primary w-100" style="border: solid 1px black; border-radius: 0px;">Add to Watchlist</button>';
        domString += '<button class="btn btn-secondary w-100" style="border: solid 1px black; border-radius: 0px;">Rate this Movie</button>';
        domString += '</div>';
        domString += '</div>';
        util.printToDom('movies', domString);
      });
    })
    .catch();
};

export default { movieBuilder };
