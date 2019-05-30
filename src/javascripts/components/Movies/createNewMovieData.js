import axios from 'axios';
import apiKeys from '../../helpers/data/apiKeys.json';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const addNewMovie = movieObject => axios.post(`${firebaseUrl}/movies.json`, movieObject);

export default { addNewMovie };
