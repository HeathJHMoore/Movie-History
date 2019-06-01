import axios from 'axios';

import apiKeys from '../../helpers/data/apiKeys.json';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getWatchlist = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const watchlistResults = results.data;
      const watchlist = [];
      Object.keys(watchlistResults).forEach((watchlistID) => {
        watchlistResults[watchlistID].id = watchlistID;
        watchlist.push(watchlistResults[watchlistID]);
      });
      resolve(watchlist);
    })
    .catch(err => reject(err));
});

export default { getWatchlist };
