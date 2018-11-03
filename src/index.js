// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import bio from './javascripts/components/bio';

const initApp = () => {
  bio.getBioData();
};

initApp();
