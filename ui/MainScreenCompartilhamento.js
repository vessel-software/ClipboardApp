let dom = require('dominant');

module.exports = ({ compartilhamento }) => {
  console.log(compartilhamento);
  let model = {
    get compartilhamento() {
      console.log('compartilhamento', compartilhamento)
      return dom.resolve(compartilhamento)
    }
  }

  return (dom.el('div', {
    class: 'text-gray-700 pb-2 pt-2 flex -mx-2',
  }, [
    dom.el('i', { class: model.compartilhamento.type + ' pt-4 text-lg pl-2' }, [
    ]),
    dom.el('div', { class: 'pl-2 truncate' }, [
      dom.el('p', {
        class: 'text-gray-900'
      }, [,
        model.compartilhamento.author
      ],
      ),
      dom.el('p', {
      }, [,
        model.compartilhamento.content
      ],
      ),
    ]),
  ]))
}