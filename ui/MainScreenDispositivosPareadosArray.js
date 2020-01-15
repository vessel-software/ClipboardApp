let dom = require('dominant');
let MainScreenDispositivoPareado = require('./MainScreenDispositivoPareado');

module.exports = ({dispositivos}) => dom.el('div', {
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
    () => dispositivos, dispositivo => dom.el('div', {
    }, [
      MainScreenDispositivoPareado({ dispositivo })
    ]),
  ),
]);
