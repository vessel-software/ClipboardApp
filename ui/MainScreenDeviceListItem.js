let dom = require('dominant');

module.exports = ({ device }) => {
  let model = {
    get device() {
      return dom.resolve(device)
    }
  }

  return (dom.el('div', {
    class: 'text-gray-700 pb-2 pt-2',
  }, [
    dom.el('div', {
    }, [
      model.device.name,
      ' - ',
      model.device.description
    ],
    ),
  ]))
}