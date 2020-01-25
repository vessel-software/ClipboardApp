let MainScreenDeviceListItem = require('./MainScreenDeviceListItem');
let d = require('dominant');

module.exports = class MainScreenDeviceList extends d.Component {
  get devices() {
    return d.resolve(this.props.devices);
  }

  render = () => d.el('div', {
    model: this,
    class: 'text-gray-700 pt-4 flex flex-col',
  }, [
    d.el('div', 'Dispositivos pareados'),

    d.map(() => this.devices, device => d.el('div', [
      d.el(MainScreenDeviceListItem, { device }),
    ])),
  ]);
};
