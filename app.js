let MainScreen = require('./ui/MainScreen');
let dom = require('dominant');

document.head.append(dom.el('style', `
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    width: 600px;
  }
`));

addEventListener('DOMContentLoaded', () => {
  document.body.append(window.MainScreen = MainScreen());
});

window.dom = dom;
