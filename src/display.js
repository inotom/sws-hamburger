import attr from './attr.js';

const isMobile = (el) => {
  let width  = attr(el, 'data-sws-hamburger-mobile-width', 640);
  if (parseInt(width, 10) === 0) {
    return false;
  }
  return window.matchMedia('(max-width: ' + width + 'px)').matches;
};

export default (el) => {
  let display = 'none';
  if (isMobile(el)) {
    display = 'block';
  }
  el.style.display = display;
};
