import $ from 'jquery';

const navBarEvents = () => {
  $('.nav-links ul li a[href^="#"]').on('click', (evt) => {
    evt.preventDefault();
    const { hash } = evt.target;

    $('html, body').animate({ scrollTop: $(hash).offset().top - 80 }, 800, () => {
      window.location.hash = hash - 80;
    });
  });
};

export default { navBarEvents };
