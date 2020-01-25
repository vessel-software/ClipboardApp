let MainScreenDeviceListItem = require('./MainScreenDeviceListItem');
let dom = require('dominant');

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
      MainScreenDeviceListItem({ device })
    ]),
  ),
]);
