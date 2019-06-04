import axios from 'axios';
import apiKeys from '../../helpers/data/apiKeys.json';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const addNewWatchlist = movieObject => axios.post(`${firebaseUrl}/userMovie.json`, movieObject);

export default { addNewWatchlist };
