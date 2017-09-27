import existy from 'swsutils/src/existy';
import attr from './attr.js';

export default (el) => {
  let size    = parseInt(attr(el, 'data-sws-hamburger-size', 50), 10);
  let weight  = parseInt(attr(el, 'data-sws-hamburger-weight', 3), 10);
  let bgColor = attr(el, 'data-sws-hamburger-bg-color', '#ffc966');
  let fgColor = attr(el, 'data-sws-hamburger-fg-color', '#ffffff');
  let image   = attr(el, 'data-sws-hamburger-src', null);

  let bgImage = existy(image) ? `url(${image})` : 'none';

  return `
#sws-hamburger {
  overflow: hidden;
  position: relative;
  width: ${size}px;
  height: ${size}px;
  color: ${fgColor};
  background-color: ${bgColor};
}
#sws-hamburger > .sws-hamburger-line {
  display: inline-block;
  position: absolute;
  left: 20%;
  width: 60%;
  height: ${weight}px;
  background-color: ${fgColor};
  cursor: pointer;
  transition: all .4s ease-out 0s;
}
#sws-hamburger > .sws-hamburger-line:nth-child(1) {
  top: 20%;
  transform: none;
}
#sws-hamburger > .sws-hamburger-line:nth-child(2) {
  top: ${(size / 2) - (weight / 2)}px;
  transform: scale(1);
}
#sws-hamburger > .sws-hamburger-line:nth-child(3) {
  bottom: 20%;
  transform: none;
}
#sws-hamburger.sws-hamburger-handle-is-active > .sws-hamburger-line:nth-child(1) {
  top: ${50 - ((weight / size * 100) / 2)}%;
  transform: rotate(405deg) scale(1.2);
}
#sws-hamburger.sws-hamburger-handle-is-active > .sws-hamburger-line:nth-child(2) {
  transform: scale(0);
}
#sws-hamburger.sws-hamburger-handle-is-active > .sws-hamburger-line:nth-child(3) {
  bottom: ${50 - ((weight / size * 100) / 2)}%;
  transform: rotate(-405deg) scale(1.2);
}
#sws-hamburger > .sws-hamburger-image {
  display: block;
  position: relative;
  width: ${size}px;
  height: ${size}px;
  background: transparent ${bgImage} no-repeat 50% 50%;
  background-size: 100% 100%;
}
`;
};
