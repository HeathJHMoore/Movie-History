import getMovies from './getMovies';
import util from '../../helpers/util';


const movieBuilder = () => {
  getMovies.getMovies()
    .then((moviesArray) => {
      console.error('this is the moview Array', moviesArray);
      let domString = '';
      moviesArray.forEach((movie) => {
        domString += '<div class="card col-3">';
        domString += `<h2>${movie.title}</h2>`;
        domString += `<img src="${movie.imageURL}">`;
        domString += '</div>';
        util.printToDom('movies', domString);
      });
    })
    .catch();
};

export default { movieBuilder };
