let MainScreen = require('./ui/MainScreen');
let d = require('dominant');

document.head.append(d.el('style', `
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    width: 600px;
  }
`));

addEventListener('DOMContentLoaded', () => {
  document.body.append(window.mainScreen = d.el(MainScreen));
});

window.d = d;
