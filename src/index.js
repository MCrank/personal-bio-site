import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';

import './index.scss';

import navBarEvents from './events/navBarEvents';
import bckgrndVideo from './img/clouds-small.mp4';
import headShot from './img/marco.jpg';
import webpack from './img/webpack.svg';

import Bio from './components/Bio/Bio';
import projects from './components/Projects/Projects';

$('#video-bkgrnd').attr('src', bckgrndVideo);
$('#head-shot').attr('src', headShot);
$('#webpack-logo').attr('src', webpack);

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navBarEvents.navBarEvents();
  Bio.bioStringBuilder();
  projects.getProjectData();
};

initApp();
