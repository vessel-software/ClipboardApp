let dom = require('dominant');
let MainScreenDispositivoPareado = require('./MainScreenDispositivoPareado');

let arr = [
  { name: 'JOHN DOE', description: 'proin euismod malesuada urna et interdum eros tincidunt ac' },
  { name: 'JOAO SILVA', description: 'etiam quis lacus commodo sollicitudin odio non posuere enim' },
];

module.exports = () => dom.el('div', {
  class: 'text-gray-700 pt-4 flex flex-col',
}, [
  dom.el('div', {
  }, [
    'Dispositivos Pareados',
  ]),
  dom.el('div', {
  }, [
  ]),
  dom.map(
    () => (console.log(arr), arr), dispositivo => dom.el('div', {
    }, [
      MainScreenDispositivoPareado({ dispositivo })
    ]),
  ),
]);
