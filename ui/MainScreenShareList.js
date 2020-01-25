let MainScreenShareListItem = require('./MainScreenShareListItem');
let d = require('dominant');

module.exports = class MainScreenShareList extends d.Component {
  get shares() {
    return d.resolve(this.props.shares);
  }

  render = () => d.el('div', {
    model: this,
    class: 'my-6 text-gray-700 pt-4 flex flex-col',
  }, [
    d.el('div', { class: 'pl-1' }, 'Compartilhamentos'),

    d.map(() => this.shares, share => d.el('div', [
      d.el(MainScreenShareListItem, { share }),
    ])),
  ]);
};
