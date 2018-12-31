import axios from 'axios';

import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechDetails = () => {
  axios.get(`${firebaseUrl}/tech.json`);
};

export default { getTechDetails };
