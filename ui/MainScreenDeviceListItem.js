let d = require('dominant');

module.exports = class MainScreenDeviceListItem extends d.Component {
  get device() {
    return d.resolve(this.props.device);
  }

  render = () => d.el('div', {
    model: this,
    class: 'text-gray-700 pb-2 pt-2',
  }, [
    d.text(() => `${this.device.name} - ${this.device.description}`),
  ]);
};
