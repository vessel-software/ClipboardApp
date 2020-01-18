let dom = require('dominant');
let MainScreenPairedDevice = require('./MainScreenPairedDevice');

module.exports = ({devices}) => dom.el('div', {
  class: 'text-gray-700 pt-4 flex flex-col',
}, [
  dom.el('div', {
  }, [
    'Dispositivos pareados',
  ]),
  dom.el('div', {
  }, [
  ]),
  dom.map(
    () => devices, device => dom.el('div', {
    }, [
      MainScreenPairedDevice({ device })
    ]),
  ),
]);
