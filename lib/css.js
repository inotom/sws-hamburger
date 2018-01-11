'use strict';

var existy = require('swsutils/src/existy');
var attr = require('./attr.js');

module.exports = function (el) {
  var size = parseInt(attr(el, 'data-sws-hamburger-size', 50), 10);
  var weight = parseInt(attr(el, 'data-sws-hamburger-weight', 3), 10);
  var bgColor = attr(el, 'data-sws-hamburger-bg-color', '#ffc966');
  var fgColor = attr(el, 'data-sws-hamburger-fg-color', '#ffffff');
  var image = attr(el, 'data-sws-hamburger-src', null);

  var bgImage = existy(image) ? 'url(' + image + ')' : 'none';

  return '\n#sws-hamburger {\n  overflow: hidden;\n  position: relative;\n  width: ' + size + 'px;\n  height: ' + size + 'px;\n  color: ' + fgColor + ';\n  background-color: ' + bgColor + ';\n}\n#sws-hamburger > .sws-hamburger-line {\n  display: inline-block;\n  position: absolute;\n  left: 20%;\n  width: 60%;\n  height: ' + weight + 'px;\n  background-color: ' + fgColor + ';\n  cursor: pointer;\n  transition: all .4s ease-out 0s;\n}\n#sws-hamburger > .sws-hamburger-line:nth-child(1) {\n  top: 20%;\n  transform: none;\n}\n#sws-hamburger > .sws-hamburger-line:nth-child(2) {\n  top: ' + (size / 2 - weight / 2) + 'px;\n  transform: scale(1);\n}\n#sws-hamburger > .sws-hamburger-line:nth-child(3) {\n  bottom: 20%;\n  transform: none;\n}\n#sws-hamburger.sws-hamburger-handle-is-active > .sws-hamburger-line:nth-child(1) {\n  top: ' + (50 - weight / size * 100 / 2) + '%;\n  transform: rotate(405deg) scale(1.2);\n}\n#sws-hamburger.sws-hamburger-handle-is-active > .sws-hamburger-line:nth-child(2) {\n  transform: scale(0);\n}\n#sws-hamburger.sws-hamburger-handle-is-active > .sws-hamburger-line:nth-child(3) {\n  bottom: ' + (50 - weight / size * 100 / 2) + '%;\n  transform: rotate(-405deg) scale(1.2);\n}\n#sws-hamburger > .sws-hamburger-image {\n  display: block;\n  position: relative;\n  width: ' + size + 'px;\n  height: ' + size + 'px;\n  background: transparent ' + bgImage + ' no-repeat 50% 50%;\n  background-size: 100% 100%;\n}\n';
};