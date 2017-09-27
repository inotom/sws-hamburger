import existy from 'swsutils/src/existy';
import attr from './attr.js';
import css from './css.js';
import display from './display.js';

const KEY_ENTER = 13;

const ACTIVE_BODY_CLASS_NAME = 'sws-hamburger-is-active';
const ACTIVE_CLASS_NAME = 'sws-hamburger-handle-is-active';

export default () => {

  const elSwsHamburger = document.getElementById('sws-hamburger');

  if (existy(elSwsHamburger)) {

    let elStyle = document.createElement('STYLE');
    elStyle.textContent = css(elSwsHamburger);
    document.head.appendChild(elStyle);

    let image   = attr(elSwsHamburger, 'data-sws-hamburger-src', null);

    if (existy(image)) {
      let elBgImage = document.createElement('DIV');
      elBgImage.classList.add('sws-hamburger-image');
      elSwsHamburger.appendChild(elBgImage);
    } else {
      for (let i = 0; i < 3; i++) {
        let elLine = document.createElement('SPAN');
        elLine.classList.add('sws-hamburger-line');
        elSwsHamburger.appendChild(elLine);
      }
    }

    elSwsHamburger.addEventListener('click', (e) => {
      e.preventDefault();
      let method = elSwsHamburger.classList.contains(ACTIVE_CLASS_NAME) ? 'remove' : 'add';
      elSwsHamburger.classList[method](ACTIVE_CLASS_NAME);
      document.body.classList[method](ACTIVE_BODY_CLASS_NAME);
    }, false);

    elSwsHamburger.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.keyCode === KEY_ENTER) {
        let method = elSwsHamburger.classList.contains(ACTIVE_CLASS_NAME) ? 'remove' : 'add';
        elSwsHamburger.classList[method](ACTIVE_CLASS_NAME);
        document.body.classList[method](ACTIVE_BODY_CLASS_NAME);
      }
    }, false);

    window.addEventListener('resize', () => {
      display(elSwsHamburger);
    }, false);
    display(elSwsHamburger);
  }
};
