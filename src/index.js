import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import bckgrndVideo from './img/clouds-small.mp4';
import headShot from './img/marco.jpg';
import bio from './javascripts/components/bio';

$('#video-bkgrnd').attr('src', bckgrndVideo);
$('#head-shot').attr('src', headShot);
const initApp = () => {
  bio.getBioData();
};

initApp();
