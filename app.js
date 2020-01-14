let MainScreen = require('./ui/MainScreen');
let dom = require('dominant');

document.head.append(dom.el('link', {
  rel: 'stylesheet',
  href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
}));

document.head.append(dom.el('link', {
  rel: 'stylesheet',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css',
}));

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
