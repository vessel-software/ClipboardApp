let dom = require('dominant');

module.exports = () => dom.el('div', {
  class: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
}, [
  dom.el('div', {
  }, [
    'Derp',
  ]),

  dom.el('div', {
  }, [
  ]),
]);
