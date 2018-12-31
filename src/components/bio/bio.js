import $ from 'jquery';
import bioData from '../../data/bioData';
import './Bio.scss';

const bioStringBuilder = () => {
  let bioDomString = '';
  bioDomString = `
  <div class="jumbotron container text-white" id="bio-container">
    <h1 class="text-white text-center">About Me</h1>
    <hr class="my-4 border border-white" />
    <p class="lead">
      Growing up as an "Army brat", I had the pleasure of staying in various locations around the world; finally settling in Clarksville, TN after my Dad's retirement from the Army.
    </p>
    <p class="lead">
      I started my love of computers with a Commodore VIC-20 which continued on to Apple IIe in middle school, followed by a Commodore 64 through high school. Upon graduation from high school I joined the Navy as a Fire Control Technician aboard a nuclear powered attack submarine.
    </p>
    <p class="lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet erat et purus laoreet posuere in at urna. Nulla vel tortor ligula. Duis malesuada, elit ac vulputate bibendum, sem elit congue nulla, quis rutrum purus nunc et enim. Quisque eu varius enim, eget volutpat augue..
    </p>
    <p class="lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet erat et purus laoreet posuere in at urna. Nulla vel tortor ligula. Duis malesuada, elit ac vulputate bibendum, sem elit congue nulla, quis rutrum purus nunc et enim. Quisque eu varius enim, eget volutpat augue.
    </p>
    <p class="lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet erat et purus laoreet posuere in at urna. Nulla vel tortor ligula. Duis malesuada, elit ac vulputate bibendum, sem elit congue nulla, quis rutrum purus nunc et enim. Quisque eu varius enim, eget volutpat augue.
    </p>
    <hr class="my-4" />
    <p>
      ILorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet erat et purus laoreet posuere in at urna. Nulla vel tortor ligula. Duis malesuada, elit ac vulputate bibendum, sem elit congue nulla, quis rutrum purus nunc et enim. Quisque eu varius enim, eget volutpat augue.
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
