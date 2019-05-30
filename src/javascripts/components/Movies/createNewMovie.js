import newMovies from './createNewMovieData';

const createNewMovies = () => {
  const newMovie = {
    title: document.getElementById('newMovieTitle').value,
    mpaaRating: document.getElementById('newMovieMPAARating').value,
    imageURL: document.getElementById('newMovieImageURL').value,
  };
  newMovies.addNewMovie(newMovie)
    .then(() => {
      console.error(newMovie, 'you did it!');
      document.getElementById('newMovieTitle').value = '';
      document.getElementById('newMovieMPAARating').value = '';
      document.getElementById('newMovieImageURL').value = '';
    })
    .catch(err => console.error(err, 'no new movie for you'));
};

const createMovieEventListener = () => {
  document.getElementById('addMovieButton').addEventListener('click', createNewMovies);
};

export default { createMovieEventListener };
