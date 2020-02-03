let d = require('dominant');

exports = module.exports = class MainScreenDeviceList extends d.Component {
  static deviceIconClassesByType = {
    desktop: 'fas fa-desktop',
    laptop: 'fas fa-laptop',
    mobile: 'fas fa-mobile',
  };

  constructor(props) {
    super();
    this.props = props;
  }

  get devices() {
    return d.resolve(this.props.devices);
  }

  deviceIconClassesFor = x =>
    exports.deviceIconClassesByType[x.type] || exports.deviceIconClassesByType.laptop;

  render = () => d.el('div', {
    model: this,
    class: 'flex flex-col px-3 text-gray-500',
  }, [
    d.map(() => this.devices, device => d.el('div', {
      class: 'flex items-center -mx-2 my-2',
    }, [
      d.el('i', { class: `pr-4 ${this.deviceIconClassesFor(device)} text-lg` }),
      d.el('p', d.text(() => device.name)),
    ])),
  ]);
};
