let dom = require('dominant');

module.exports = ({ dispositivo }) => {
  let model = {
    get dispositivo() {
      return dom.resolve(dispositivo)
    }
  }

  return (dom.el('div', {
    class: 'text-gray-700 pb-2 pt-2',
  }, [
    dom.el('div', {
    }, [
      model.dispositivo.name,
      ' - ',
      model.dispositivo.description
    ],
    ),
  ]))
}