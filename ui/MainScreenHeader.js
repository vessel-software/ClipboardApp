let d = require('dominant');

module.exports = class MainScreenHeader extends d.Component {
  render = () => d.el('div', {
    model: this,
    class: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  }, [
    'Derp',
  ])
};
