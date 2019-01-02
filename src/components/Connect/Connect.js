import $ from 'jquery';
import './Connect.scss';

const connectBuilder = () => {
  let connectDomString = '';
  connectDomString = `
  <div class="jumbotron container" id="connect-container">
  <h1>Connect With Me</h1>
  <hr class="my-4 border border-white" />
    <div class="row justify-content-around align-items-center">
      <div class="col-sm text-center">
        <a href="mailto:marco_mcse@hotmail.com">
          E-mail
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <div class="col-sm text-center">
        <a href="https://github.com/MCrank" target="_blank">
          GitHub
          <i class="fab fa-github fa-lg"></i>
        </a>
      </div>
    </div>
    <div class="row justify-content-around align-items-center">
      <div class="col-sm text-center">
        <a href="https://www.linkedin.com/in/mcrank/" target="_blank">
          LinkedIn
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
      <div class="col-sm text-center">
        <a href="https://twitter.com/MCrank/" target="_blank">
          Twitter
          <i class="fab fa-twitter fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
  `;
  $('#connect').html(connectDomString);
};

export default { connectBuilder };
