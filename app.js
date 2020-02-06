let MainScreen = require('./ui/MainScreen');
let d = require('dominant');

addEventListener('DOMContentLoaded', () => {
  document.body.append(window.mainScreen = d.el(MainScreen));
});

window.d = d;
