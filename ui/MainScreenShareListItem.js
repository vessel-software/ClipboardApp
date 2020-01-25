let d = require('dominant');

exports = module.exports = class MainScreenShareListItem extends d.Component {
  static iconClassesByType = {
    text: 'fas fa-font',
    link: 'fas fa-link',
  };

  get share() {
    return d.resolve(this.props.share);
  }

  get iconClasses() {
    return exports.iconClassesByType[this.share.type] || '';
  }

  render = () => d.el('div', {
    model: this,
    class: 'text-gray-700 pb-2 pt-2 flex -mx-2',
  }, [
    d.el('i', { class: `${this.iconClasses} pt-4 text-lg pl-2` }),

    d.el('div', { class: 'pl-2 truncate' }, [
      d.el('p', { class: 'text-gray-900' }, d.text(() => this.share.author)),
      d.el('p', d.text(() => this.share.content)),
    ]),
  ]);
};
