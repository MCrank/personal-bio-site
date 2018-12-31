import axios from 'axios';
import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechDetails = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/tech.json`)
    .then((results) => {
      const techObj = results.data;
      const techArray = [];
      if (techObj != null) {
        Object.keys(techObj).forEach((techId) => {
          const newTech = techObj[techId];
          newTech.id = techId;
          techArray.push(newTech);
        });
      }
      resolve(techArray);
    })
    .catch(err => reject(err));
});

export default { getTechDetails };
