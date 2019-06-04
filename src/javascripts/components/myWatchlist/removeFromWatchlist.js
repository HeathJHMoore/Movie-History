import axios from 'axios';

import apiKeys from '../../helpers/data/apiKeys.json';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const deleteWatchlistMovie = movieId => axios.delete(`${firebaseUrl}/userMovie/${movieId}.json`);

export default { deleteWatchlistMovie };
