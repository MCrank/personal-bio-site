import $ from 'jquery';
import './Projects.scss';
import projectData from '../../helpers/data/projectData';

const projectBuilder = (projects) => {
  let projDomString = '';
  projects.forEach((project) => {
    projDomString += `
  <div class="card mb-3" style="width: 50rem;">
    <img src="${project.screenshot}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title font-weight-bold text-white text-center">${project.title}</h4>
      <hr class="border border-white" />
      <h6 class="card-subtitle mb-2 text text-white"><strong><u>Technologies Used</u>: </strong> ${
  project.technologiesUsed
}</h6>
      <p class="card-text text-white">${project.description}</p>
      <div class="card-footer">
        <a href="${project.githubUrl}" target="_blank" class="btn btn-primary">View on Github</a>
        <a href="${project.url}" target="_blank" class="btn btn-primary">View Live Demo</a>
      </div>
    </div>
  </div>
  `;
  });
  $('#my-projects').html(projDomString);
};

const getProjectData = () => {
  projectData
    .getProjects()
    .then((projects) => {
      projectBuilder(projects);
    })
    .catch(err => console.error('An error occured retriveing project data', err));
};

export default { getProjectData };
