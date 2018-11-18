import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import navBarEvents from './events/navBarEvents';
import bckgrndVideo from './img/clouds-small.mp4';
import headShot from './img/marco.jpg';
import bio from './components/bio/bio';

$('#video-bkgrnd').attr('src', bckgrndVideo);
$('#head-shot').attr('src', headShot);

const initApp = () => {
  navBarEvents.navBarEvents();
  bio.bioStringBuilder();
  // bio.getBioData();
};

initApp();
