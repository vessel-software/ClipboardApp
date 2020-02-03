let d = require('dominant');

exports = module.exports = class MainScreenShareList extends d.Component {
  static shareIconClassesByType = {
    text: 'fas fa-quote-right',
    link: 'fas fa-link',
  };

  constructor(props) {
    super();
    this.props = props;
  }

  get shares() {
    return d.resolve(this.props.shares);
  }

  shareIconClassesFor = x => exports.shareIconClassesByType[x.type] || '';

  render = () => d.el('div', {
    model: this,
    class: 'flex flex-col px-3 text-gray-500',
  }, [
    d.map(() => this.shares, share => d.el('div', {
      class: 'flex items-center -mx-2 my-2',
    }, [
      d.el('i', { class: `pr-4 ${this.shareIconClassesFor(share)} text-lg` }),

      d.el('div', [
        d.el('p', { class: 'truncate' }, d.text(() => share.source)),
        d.el('p', { class: 'truncate' }, d.text(() => share.content)),
      ]),
    ])),
  ]);
};
