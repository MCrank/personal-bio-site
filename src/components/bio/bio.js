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
      Growing up as an "Army brat", I had the pleasure of staying in various locations around the world; finally settling in Clarksville, TN after my Dad's retirement from the Army.
    </p>
    <p class="lead">
      I started my love of computers with a Commodore VIC-20 which continued on to Apple IIe in middle school, followed by a Commodore 64 through high school. Upon graduation from high school I joined the Navy as a Fire Control Technician aboard a nuclear powered attack submarine.
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
