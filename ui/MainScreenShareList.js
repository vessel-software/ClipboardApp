let MainScreenShareListItem = require('./MainScreenShareListItem');
let dom = require('dominant');

module.exports = ({shares}) => dom.el('div', {
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
    () => shares, share => dom.el('div', {
    }, [
      MainScreenShareListItem({ share })
    ]),
  ),
])
