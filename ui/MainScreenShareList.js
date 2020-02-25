let d = require('dominant');

class MainScreenShareList extends d.Component {
  shareIconClassesByType = {
    text: 'fas fa-quote-right',
    link: 'fas fa-link',
  };

  classes = {
    root: `
      MainScreenShareList
      flex flex-col
      text-gray-600
    `,

    listItem: `
      MainScreenShareList-listItem
      flex items-center
      my-3
    `,

    itemIcon: `
      MainScreenShareList-itemIcon
      flex-shrink-0 justify-center items-center
      w-10 h-10
      mr-8
      rounded-full
      text-lg
      shadow-md
    `,

    itemContent: `
      MainScreenShareList-itemContent
      overflow-hidden
    `,

    linkItemUrl: `
      text-blue-600
    `,

    itemSource: `
      MainScreenShareList-itemSource
      mt-1
      text-blue-600
      text-xs
      opacity-75
    `,
  };

  constructor(props) {
    super();
    this.props = props;
  }

  get shares() {
    return d.resolve(this.props.shares);
  }

  shareIconClassesFor = x => this.shareIconClassesByType[x.type] || '';

  render = () => d.el('div', { model: this, class: this.classes.root }, [
    d.map(() => this.shares, share => d.el('div', {
      class: this.classes.listItem,
    }, [
      d.el('i', {
        style: () => ({ display: 'flex', top: '1px' }),

        class: `
          ${this.classes.itemIcon}
          ${this.shareIconClassesFor(share)}
        `
      }),

      d.el('div', [
        d.el('p', {
          style: () => ({ 'max-height': '6em' }),
          class: this.classes.itemContent,
        }, [
          d.switch(() => tap(share.type), {
            text: d.text(() => share.content),

            link: d.el('a', {
              class: this.classes.linkItemUrl,
              href: () => share.url,
            }, [
              d.text(() => share.url),
            ]),
          }),
        ]),

        d.el('p', { class: this.classes.itemSource }, [
          d.text(() => share.source),
        ]),
      ]),
    ])),
  ]);
};

module.exports = exports = MainScreenShareList;
