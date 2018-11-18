import $ from 'jquery';
import bioData from '../../data/bioData';
import './bio.scss';

const bioStringBuilder = () => {
  let bioDomString = '';
  bioDomString = `
  <div class="jumbotron container text-white" id="bio-container">
    <h1 class="display-4 text-white">Who Am I</h1>
    <hr class="my-4 border border-white" />
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </p>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </p>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </p>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </p>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </p>
    <hr class="my-4" />
    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
  </div>
  `;
  $('#bio').html(bioDomString);
};

const getBioData = () => {
  bioData
    .getBioData()
    .then((bio) => {
      bioStringBuilder(bio.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getBioData, bioStringBuilder };
