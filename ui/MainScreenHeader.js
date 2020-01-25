let MainScreenCmdBar = require('./MainScreenCmdBar');
let d = require('dominant');

module.exports = class MainScreenHeader extends d.Component {
  render = () => d.el('div', {
    model: this,
    class: 'shadow-md p-4 bg-gray-600',
  }, [
    d.el(MainScreenCmdBar),
  ]);
};
