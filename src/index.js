import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';

import './index.scss';

import navBarEvents from './events/navBarEvents';
import bckgrndVideo from './img/clouds-small.mp4';
import headShot from './img/marco.jpg';

import Bio from './components/Bio/Bio';
import projects from './components/Projects/Projects';
import tech from './components/Tech/Tech';
import connect from './components/Connect/Connect';

$('#video-bkgrnd').attr('src', bckgrndVideo);
$('#head-shot').attr('src', headShot);

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navBarEvents.navBarEvents();
  Bio.bioStringBuilder();
  projects.getProjectData();
  tech.getTechData();
  connect.connectBuilder();
};

initApp();
