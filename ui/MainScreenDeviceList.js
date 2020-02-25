let d = require('dominant');

class MainScreenDeviceList extends d.Component {
  deviceIconClassesByType = {
    desktop: 'fas fa-desktop',
    laptop: 'fas fa-laptop',
    mobile: 'fas fa-mobile-alt',
  };

  classes = {
    root: `
      mainScreenDeviceList
      flex flex-col
      text-gray-600
    `,

    listItem: `
      mainScreenDeviceList-listItem
      flex items-center
      my-3
    `,

    itemIcon: `
      mainScreenDeviceList-itemIcon
      justify-center items-center
      w-10 h-10
      mr-8
      rounded-full
      text-lg
      shadow-md
    `,
  };

  constructor(props) {
    super();
    this.props = props;
  }

  get devices() {
    return d.resolve(this.props.devices);
  }

  deviceIconClassesFor = x =>
    this.deviceIconClassesByType[x.type] || this.deviceIconClassesByType.laptop;

  render = () => d.el('div', {
    model: this,
    class: this.classes.root,
  }, [
    d.map(() => this.devices, device => d.el('div', {
      class: this.classes.listItem,
    }, [
      d.el('i', {
        style: () => ({ display: 'flex' }),

        class: `
          ${this.classes.itemIcon}
          ${this.deviceIconClassesFor(device)}
        `,
      }),

      d.el('p', d.text(() => device.name)),
    ])),
  ]);
};

module.exports = exports = MainScreenDeviceList;
