import axios from 'axios';
import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const projectsObj = results.data;
      const projectsArray = [];
      if (projectsObj != null) {
        Object.keys(projectsObj).forEach((projectId) => {
          const newProject = projectsObj[projectId];
          newProject.id = projectId;
          projectsArray.push(newProject);
        });
      }
      resolve(projectsArray);
    })
    .catch(err => reject(console.error('An error occured retrieving projects', err)));
});

export default { getProjects };
