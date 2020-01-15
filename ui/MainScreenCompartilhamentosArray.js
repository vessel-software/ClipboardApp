let dom = require('dominant');
let MainScreenCompartilhamento = require('./MainScreenCompartilhamento');

module.exports = ({compartilhamentos}) => dom.el('div', {
  class: 'my-6 text-gray-700 pt-4 flex flex-col',
}, [
  dom.el('div', {
    class: 'pl-1'
  }, [
    'Compartilhamentos',
  ]),
  dom.el('div', {
  }, [
  ]),
  dom.map(
    () => compartilhamentos, compartilhamento => dom.el('div', {
    }, [
      MainScreenCompartilhamento({ compartilhamento })
    ]),
  ),
])
