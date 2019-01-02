import $ from 'jquery';
import techData from '../../helpers/data/techData';

import './Tech.scss';

const techBuilder = (techArr) => {
  let techDomString = '';
  techDomString += `
  <h1>Technologies</h1>
  <div class="container">
      <div class="row justify-content-around align-items-center">
  `;
  techArr.forEach((tech) => {
    techDomString += `
        <div class="col-sm-2 m-3 text-center">
          <a href="${tech.url}" target="_blank"><img src="${tech.base64}" alt="${
  tech.name
} image" id="${tech.imgName}" /></a>
        </div>
    `;
  });
  techDomString += `
      </div>
    </div>
  `;
  $('#my-tech').html(techDomString);
};

const getTechData = () => {
  techData
    .getTechDetails()
    .then((techArr) => {
      techBuilder(techArr);
    })
    .catch(err => console.error('An error occured retrieveing tech data', err));
};

export default { getTechData };
