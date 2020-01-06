let MainScreen = require('./ui/MainScreen');
let dom = require('dominant');

document.head.append(dom.el('link', {
  rel: 'stylesheet',
  href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
}));

document.head.append(dom.el('style', `
  body {
    display: flex;
    flex-direction: column;
    width: 600px;
    min-height: 100vh;
    margin: 0 auto;
  }
`));

addEventListener('DOMContentLoaded', () => {
  document.body.append(window.MainScreen = MainScreen());
});

window.dom = dom;
