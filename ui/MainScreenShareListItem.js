let dom = require('dominant');

module.exports = ({ share }) => {
  let model = {
    get Share() {
      return dom.resolve(share)
    },
    get shareIcon() {
      switch (model.Share.type) {
        case 'text':
          return 'fas fa-font'
          break;
        case 'link':
          return 'fas fa-link'
          break;
        default:
          return
          break;
      }
    }
  }

  return (dom.el('div', {
    class: 'text-gray-700 pb-2 pt-2 flex -mx-2',
  }, [
    dom.el('i', { class: model.shareIcon + ' pt-4 text-lg pl-2' }, [
    ]),
    dom.el('div', { class: 'pl-2 truncate' }, [
      dom.el('p', {
        class: 'text-gray-900'
      }, [,
        model.Share.author
      ],
      ),
      dom.el('p', {
      }, [,
        model.Share.content
      ],
      ),
    ]),
  ]))
}