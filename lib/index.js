'use strict';

var existy = require('swsutils/src/existy');
var attr = require('./attr.js');
var css = require('./css.js');
var display = require('./display.js');

var KEY_ENTER = 13;

var ACTIVE_BODY_CLASS_NAME = 'sws-hamburger-is-active';
var ACTIVE_CLASS_NAME = 'sws-hamburger-handle-is-active';

module.exports = function () {

  var elSwsHamburger = document.getElementById('sws-hamburger');

  if (existy(elSwsHamburger)) {

    var elStyle = document.createElement('STYLE');
    elStyle.textContent = css(elSwsHamburger);
    document.head.appendChild(elStyle);

    var image = attr(elSwsHamburger, 'data-sws-hamburger-src', null);

    if (existy(image)) {
      var elBgImage = document.createElement('DIV');
      elBgImage.classList.add('sws-hamburger-image');
      elSwsHamburger.appendChild(elBgImage);
    } else {
      for (var i = 0; i < 3; i++) {
        var elLine = document.createElement('SPAN');
        elLine.classList.add('sws-hamburger-line');
        elSwsHamburger.appendChild(elLine);
      }
    }

    elSwsHamburger.addEventListener('click', function (e) {
      e.preventDefault();
      var method = elSwsHamburger.classList.contains(ACTIVE_CLASS_NAME) ? 'remove' : 'add';
      elSwsHamburger.classList[method](ACTIVE_CLASS_NAME);
      document.body.classList[method](ACTIVE_BODY_CLASS_NAME);
    }, false);

    elSwsHamburger.addEventListener('keydown', function (e) {
      e.preventDefault();
      if (e.keyCode === KEY_ENTER) {
        var method = elSwsHamburger.classList.contains(ACTIVE_CLASS_NAME) ? 'remove' : 'add';
        elSwsHamburger.classList[method](ACTIVE_CLASS_NAME);
        document.body.classList[method](ACTIVE_BODY_CLASS_NAME);
      }
    }, false);

    window.addEventListener('resize', function () {
      display(elSwsHamburger);
    }, false);
    display(elSwsHamburger);
  }
};