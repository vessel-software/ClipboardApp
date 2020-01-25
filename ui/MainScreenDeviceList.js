let d = require('dominant');

module.exports = class MainScreenDeviceList extends d.Component {
  get devices() {
    return d.resolve(this.props.devices);
  }

  render = () => d.el('div', {
    model: this,
    class: 'text-gray-700 flex flex-col',
  }, [
    d.map(() => this.devices, device => d.el('div', {
      class: 'text-gray-700 pb-2 pt-2',
    }, [
      d.text(() => `${device.name} - ${device.description}`),
    ])),
  ]);
};
