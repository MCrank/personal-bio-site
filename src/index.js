// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import bio from './javascripts/components/bio';

library.add(faTwitter, faGithub, faLinkedin);

const initApp = () => {
  bio.getBioData();
};

dom.watch();

initApp();
