// import addToWatchlist from './addToWatchlistData';


const addWatchlistMovie = (e) => {
  const selectedMovie = e.target.parentNode.parentNode;
  console.error(selectedMovie);
  const newMovie = {
    title: selectedMovie.find('h2').textContent
    // mpaaRating: document.getElementById('newMovieMPAARating').value,
    // imageURL: document.getElementById('newMovieImageURL').value,
  };
  console.error(newMovie);
  // newMovies.addNewMovie(newMovie)
  //   .then(() => {
  //     console.error(newMovie, 'you did it!');
  //     document.getElementById('newMovieTitle').value = '';
  //     document.getElementById('newMovieMPAARating').value = '';
  //     document.getElementById('newMovieImageURL').value = '';
  //   })
  //   .catch(err => console.error(err, 'no new movie for you'));
};

const createWatchlistEventListener = () => {
  document.addEventListener('click', (e) => {
    console.error(e.target.classList.contains('watchlistButton'));
    if (e.target.classList.contains('watchlistButton')) {
      addWatchlistMovie(e);
    }
  });
};

export default { createWatchlistEventListener };
