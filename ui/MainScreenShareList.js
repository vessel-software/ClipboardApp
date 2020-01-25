let d = require('dominant');

exports = module.exports = class MainScreenShareList extends d.Component {
  static shareIconClassesByType = {
    text: 'fas fa-font',
    link: 'fas fa-link',
  };

  get shares() {
    return d.resolve(this.props.shares);
  }

  shareIconClassesFor = x => exports.shareIconClassesByType[x.type] || '';

  render = () => d.el('div', {
    model: this,
    class: 'text-gray-500 flex flex-col',
  }, [
    d.map(() => this.shares, share => d.el('div', {
      class: 'text-gray-700 py-2 flex -mx-2',
    }, [
      d.el('i', {
        class: `${this.shareIconClassesFor(share)} pt-4 text-lg pl-2`,
      }),

      d.el('div', { class: 'pl-2 truncate' }, [
        d.el('p', { class: 'text-gray-900' }, d.text(() => share.author)),
        d.el('p', d.text(() => share.content)),
      ]),
    ])),
  ]);
};
