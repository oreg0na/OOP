'use strict';

const DomElement = function (selector, height = 100, width = 100, bg = 'gray', fontSize = 18) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElem = () => {
    let elem;
    const inText = prompt('Введите текс!');
    if (this.selector[0] === '.') {
      elem = document.createElement('div');
      elem.classList.add(`${this.selector.slice(1)}`);
    }
    if (this.selector[0] === '#') {
      elem = document.createElement('p');
      elem.id = `${this.selector.slice(1)}`;
    }

    elem.style.cssText = `margin: 0;
    padding: 5px;
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
    position: absolute;
    top: 0;
    left: 0;`;

    if (inText || inText.trim() !== '') {
      elem.innerText = inText;
    }

    return document.body.append(elem);
  };
};

const domCreateElement = new DomElement('#qwerty');

document.addEventListener("DOMContentLoaded", () => {
  domCreateElement.createElem();

  const element = document.body.children[0];

  document.addEventListener('keydown', (e) => {
    const elementStyle = getComputedStyle(element);
    const left = elementStyle.left.slice(0, -2);
    const top = elementStyle.top.slice(0, -2);

    switch (e.keyCode) {
      case 37:
        element.style.left = `${+left - 10}px`;
        break;
      case 38:
        element.style.top = `${+top - 10}px`;
        break;
      case 39:
        element.style.left = `${+left + 10}px`;
        break;
      case 40:
        element.style.top = `${+top + 10}px`;
        break;
    }
  });
});


